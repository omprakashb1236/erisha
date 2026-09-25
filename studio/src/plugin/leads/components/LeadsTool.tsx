import { DownloadIcon, SearchIcon } from '@sanity/icons';
import { Button, Card, Container, Flex, Heading, Label, Select, Spinner, Stack, Text, ToastProvider } from '@sanity/ui';
import { useState } from 'react';
import { exportToExcel } from 'react-json-to-excel';
import { useListeningQuery } from 'sanity-plugin-utils';
import "../styles/lease.css";
import LeadsList, { UtmProps } from './leads-list';
import { FilterProps, getLeadFilters } from './util';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/leads-list.module.css";
import { page } from '../../../schemaTypes/documents/page';
import { useCurrentUser } from 'sanity';

export type Lead = {
  _id: string;
  _type: "lead";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  fleetSize?: string;
  companyName?: string;
  comments?: string;
  formType?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  location?: string;
  modelYear?: number;
  serviceCenter?: string;
  type?: string;
  contactYou?: string;
  pageUrl?: string;
};

const ALLOWED_USERS = "abdulrahman.zakout@geely.ae"

export default function LeadsTool() {
  const currentUser = useCurrentUser();
  const [models, setModels] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [landingPage, setLandingPage] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const q = `*[_type == 'lead'] | order(_createdAt desc)`;
  const [query, setQuery] = useState(q);
  const [fieldError, setFieldError] = useState('');
  const [sortBy, setSortBy] = useState('');

  const {
    data,
    loading,
    error
  } = useListeningQuery(query, {
    initialValue: [],
  });
  const leads = data as Lead[];

  if (loading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView />;
  }

  const handleClick = (sortBy: string) => {
    let conditions = [];
    if (fromDate) {
      const fD = fromDate + "T00:00:00Z";
      conditions.push(`_createdAt >= "${fD}"`);
    }
    if (toDate) {
      const tD = toDate + "T23:59:59Z";
      conditions.push(`_createdAt <= "${tD}"`);
    }
    if (models.length > 0) {
      const modelConditions = models.map(m => `vehicleModel match "*${m}*"`).join(' || ');
      conditions.push(`(${modelConditions})`);
    }
    if (locations.length > 0) {
      const locationConditions = locations.map(l => `location match "*${l}*"`).join(' || ');
      conditions.push(`(${locationConditions})`);
    }
    if (landingPage) {
      conditions.push(`pageUrl match "${landingPage}*"`);
    }

    const whereClause = conditions.length > 0 ? ` && ${conditions.join(' && ')}` : '';
    const sortClause = sortBy === "newest" ? "_createdAt desc"
      : sortBy === "oldest" ? "_createdAt asc"
        : sortBy === "a-z" ? "firstName asc"
          : sortBy === "z-a" ? "firstName desc"
            : "_createdAt desc";

    const q = `*[_type == 'lead'${whereClause}] | order(${sortClause})`;
    console.log(q);
    if (conditions.length > 0 || sortBy) {
      setQuery(q);
      setFieldError('');
    } else {
      setFieldError('Please select at least one filter option.');
    }
  };

  const leadFilters = getLeadFilters(leads) as FilterProps;

  const handleChange = (value: string): void => {
    setSortBy(value);
    handleClick(value); // Reuse handleClick to apply both filters and sorting
  };

  const clearSortBy = (): void => {
    setSortBy('');
    handleClick('newest');
  }

  const orderedLeads = leads.map((lead: Lead) => {
    const url = lead.pageUrl ? new URL(lead.pageUrl) : { hostname: "N/A", pathname: "", searchParams: new URLSearchParams() };
    const landingPage = url.hostname + url.pathname
    const searchParams = url.searchParams;
    const isEmpty = [...searchParams.entries()].length === 0;
    const utmParameters: UtmProps = {
      utm_source: "N/A",
      utm_medium: "N/A",
      utm_campaign: "N/A",
    };
    if (!isEmpty) {
      utmParameters.utm_source = searchParams.get("utm_source") || "N/A";
      utmParameters.utm_medium = searchParams.get("utm_medium") || "N/A";
      utmParameters.utm_campaign = searchParams.get("utm_campaign") || "N/A";
    }
    return {
      title: lead.title || '',
      firstName: lead.firstName || '',
      lastName: lead.lastName || '',
      email: lead.email || '',
      phone: lead.phone || '',
      formType: lead.formType || '',
      landingPage: landingPage || '',
      fleetSize: lead.fleetSize || '',
      companyName: lead.companyName || '',
      vehicleMake: lead.vehicleMake || '',
      vehicleModel: lead.vehicleModel || '',
      location: lead.location || '',
      modelYear: lead.modelYear || '',
      serviceCenter: lead.serviceCenter || '',
      type: lead.type || '',
      contactYou: lead.contactYou || '',
      pageUrl: lead.pageUrl || '',
      comments: lead.comments || '',
      utmSource: utmParameters.utm_source || '',
      utmMedium: utmParameters.utm_medium || '',
      utmCampaign: utmParameters.utm_campaign || '',
      _createdAt: lead._createdAt || '',
    }
  });

  function handleExport(exportData: any, exportName: string): void {
    if (!currentUser || !ALLOWED_USERS.includes(currentUser.email)) {
      alert('Access denied! You do not have permission to export data.');
      return;
    }
    if (!exportData || exportData.length === 0) {
      alert('No data available to export.');
      return;
    }
    exportToExcel(exportData, exportName);
  }

  return (
    <ToastProvider>
      <Container className="mainContainer" style={{ marginTop: '60px', maxWidth: '100%', overflow: 'scroll' }}>
        <div className='headingContainer'>
          <Heading className='px-4 fs-3 text-center'>Geely Leads Dashboard</Heading>
          <Card className='exportCntr'>
            <Button
              fontSize={[1.5, 1.5, 2]}
              icon={DownloadIcon}
              padding={[4, 4, 4]}
              text="Export To Excel"
              tone="positive"
              className='btn btn-success exportToExcel'
              radius="full"
            />
          </Card>
        </div>
        <Flex align="center" className='d-flex justify-content-center formFields gap-3'>

          <Card padding={2}>
            <Stack>
              Select Models
              <Select
                multiple
                className="form-control"
                style={{ maxWidth: '220px' }}
                value={models}
                onChange={(e) =>
                  setModels(Array.from((e.target as HTMLSelectElement).selectedOptions, (option) => option.value))
                }
              >
                {leadFilters.vehicleModels.map((model, index) => (
                  <option key={index} value={model}>{model}</option>
                ))}
              </Select>
            </Stack>
          </Card>
          <Card padding={2}>
            <Stack>
              Select Locations
              <Select
                multiple
                className="form-control"
                style={{ minWidth: '270px' }}
                value={locations}
                onChange={(e) =>
                  setLocations(Array.from((e.target as HTMLSelectElement).selectedOptions, (option) => option.value))
                }
              >
                {leadFilters.locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </Select>
            </Stack>
          </Card>
          <Card padding={2}>
            <Stack>
              <Select
                className={`form-control`}
                value={landingPage} onChange={e => setLandingPage(e.currentTarget.value)}
              >
                <option value="" >Choose Landing Page</option>
                {leadFilters.pageUrls.map((pageUrl, index) => (
                  <option key={index} value={pageUrl}>{pageUrl}</option>
                ))}
              </Select>
            </Stack>
          </Card>
          <Card>
            <Label size={4} >From Date : </Label>
          </Card>
          <Card>

            <input type='date'
              className={`form-control `}
              onChange={(event) =>
                setFromDate(event.currentTarget.value)
              }
              value={fromDate}
            />
          </Card>
          <Card>
            <Label size={4} >To Date : </Label>
          </Card>
          <Card>
            <input type='date'
              className={`form-control `}
              onChange={(event) =>
                setToDate(event.currentTarget.value)
              }
              value={toDate}
            />
          </Card>

        </Flex>

        <Flex align="center" className='d-flex submitBtn justify-content-center gap-3'>

          <Card>
            <Button
              fontSize={[1.5, 1.5, 2]}
              icon={SearchIcon}
              padding={[3, 3, 3]}
              text="Search"
              className='btn btn-primary'
              radius="full"
              onClick={() => handleClick('newest')}
            />
          </Card>
          <Card>
            <Button
              fontSize={[1.5, 1.5, 2]}
              text="Clear Filters"
              className='btn btn-secondary'
              radius="full"
              onClick={() => {
                setModels([]);
                setLocations([]);
                setLandingPage('');
                setFromDate('');
                setToDate('');
                setQuery(q);
                setFieldError('');
              }}
            />
          </Card>
        </Flex>
        {fieldError && <p className="text-center formError mt-4 mb-0 text-red">{fieldError}</p>}
        <Container className={styles.mainContainer} style={{ marginTop: "0px !important", paddingTop: "0px !important" }}>
          <Flex >
            <Stack>
              <Flex align="center" gap={2}>
                <Select
                  className={`form-control`}
                  style={{ maxWidth: '220px' }}
                  value={sortBy} onChange={e => handleChange(e.currentTarget.value)}
                >
                  <option value="" >Sort By</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </Select>
                {sortBy && (
                  <Button
                    fontSize={2}
                    padding={2}
                    text="X"
                    tone="critical"
                    onClick={() => clearSortBy()}
                  />
                )}
              </Flex>
            </Stack>

          </Flex>
          <LeadsList
            leads={leads}
          />
        </Container>
      </Container>
    </ToastProvider >
  )
}

function LoadingView() {
  return (
    <Container style={{ marginTop: '60px' }}>
      <Card
        padding={4}
        radius={2}
        shadow={1}
        tone="positive"
      >
        <Flex
          gap={4}
          align="center"
          justify="center"
        >
          <Text
            align="center"
            size={3}
          >
            Loading Leads
          </Text>
          <Spinner muted />
        </Flex>
      </Card>
    </Container>
  )
}

function ErrorView() {
  return (
    <Container style={{ marginTop: '60px' }}>
      <Card
        padding={4}
        radius={2}
        shadow={1}
        tone="critical"
      >
        <Stack space={2}>
          <Text
            align="center"
            size={3}
          >
            Error Loading Leads
          </Text>
          <Text
            align="center"
            size={2}
          >
            Please try again later
          </Text>
        </Stack>
      </Card>
    </Container>
  )
}