// src/tools/DeleteByDateRange.tsx

import React, { useState } from 'react'
import { useClient, type Transaction } from 'sanity'
import { Card, Stack, Label, TextInput, Button, Text, Box, Spinner, useToast } from '@sanity/ui'

export function DeleteByDateRangeTool() {
    // Get the Sanity client
    const client = useClient({ apiVersion: '2024-05-01' })
    const toast = useToast()

    // State for our form inputs and UI
    const [documentType, setDocumentType] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [feedback, setFeedback] = useState('')

    const handleDelete = async () => {
        // 1. Basic validation
        if (!documentType || !startDate || !endDate) {
            setFeedback('Please fill in all fields.')
            toast.push({
                status: 'error',
                title: 'Validation Error',
                description: 'Please fill in all fields before proceeding.',
            })
            return
        }

        // 2. Confirmation dialog - THIS IS VERY IMPORTANT!
        const countQuery = `count(*[_type == $docType && _createdAt >= $startDateTime && _createdAt <= $endDateTime])`
        const params = {
            docType: documentType,
            startDateTime: `${startDate}T00:00:00Z`,
            endDateTime: `${endDate}T23:59:59Z`,
        }

        try {
            setIsLoading(true)
            const count = await client.fetch(countQuery, params)

            if (count === 0) {
                setFeedback('No documents found matching the criteria.')
                toast.push({
                    status: 'info',
                    title: 'No Documents Found',
                })
                setIsLoading(false)
                return
            }

            const confirmed = window.confirm(
                `Are you sure you want to permanently delete ${count} document(s) of type "${documentType}"? This action cannot be undone.`
            )

            if (!confirmed) {
                setIsLoading(false)
                return
            }

            // 3. Construct the GROQ query to get the IDs of documents to delete
            // We are using the system `_createdAt` field. Change this to a custom date field if needed.
            const query = `*[_type == $docType && _createdAt >= $startDateTime && _createdAt <= $endDateTime]._id`

            setFeedback(`Finding ${count} documents to delete...`)
            const docIds = await client.fetch(query, params)

            if (!docIds || docIds.length === 0) {
                setFeedback('No documents found to delete.')
                setIsLoading(false)
                return
            }

            // 4. Perform the deletion in a transaction
            setFeedback(`Deleting ${docIds.length} documents...`)
            const transaction = client.transaction()
            docIds.forEach((docId: string) => {
                transaction.delete(docId)
            })
            // ------------------------------------

            await transaction.commit()

            setFeedback(`Successfully deleted ${docIds.length} documents.`)
            toast.push({
                status: 'success',
                title: 'Deletion Successful',
                description: `Deleted ${docIds.length} documents.`,
            })

            // Reset form
            setDocumentType('')
            setStartDate('')
            setEndDate('')
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
            setFeedback(`An error occurred: ${errorMessage}`)
            toast.push({
                status: 'error',
                title: 'Deletion Failed',
                description: errorMessage,
            })
            console.error('Error deleting documents:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card padding={5} shadow={1}>
            <Stack space={4}>
                <Box>
                    <Text size={3} weight="bold">
                        Bulk Delete Documents by Date Range
                    </Text>
                    <Box marginTop={3}>
                        <Text muted>
                            This tool will permanently delete documents of a specific type within a given date range based on their creation date (`_createdAt`).
                        </Text>
                        <Text weight="bold" style={{ color: 'red' }}>
                            {' '}
                            Use with extreme caution. This action cannot be undone.
                        </Text>
                    </Box>
                </Box>

                <Stack space={3}>
                    <Label>Document Type</Label>
                    <TextInput
                        placeholder="e.g., post, product"
                        value={documentType}
                        onChange={(e) => setDocumentType(e.currentTarget.value)}
                        disabled={isLoading}
                    />
                </Stack>

                <Stack space={3}>
                    <Label>Start Date</Label>
                    <TextInput
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.currentTarget.value)}
                        disabled={isLoading}
                    />
                </Stack>

                <Stack space={3}>
                    <Label>End Date</Label>
                    <TextInput
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.currentTarget.value)}
                        disabled={isLoading}
                    />
                </Stack>

                <Button
                    text={isLoading ? 'Deleting...' : 'Delete Documents'}
                    tone="critical"
                    onClick={handleDelete}
                    disabled={isLoading}
                    icon={isLoading ? Spinner : undefined}
                />

                {feedback && (
                    <Card padding={3} radius={2} tone="primary">
                        <Text size={1}>{feedback}</Text>
                    </Card>
                )}
            </Stack>
        </Card>
    )
}