import { Lead } from "./LeadsTool";
export type FilterProps = {
    locations: string[];
    vehicleModels: string[];
    pageUrls: string[];
}
export function getLeadFilters(leads: Lead[]): FilterProps {
    const uniqueLocationsMap = new Map<string, string>();
    const uniqueVehicleModelsMap = new Map<string, string>(); // key: lowercase, value: Capitalized
    const uniquePageUrls = new Set<string>();

    const capitalizeFirst = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    leads.forEach((lead) => {
        // Location
        if (lead.location && lead.location.trim() !== "") {
            const trimmed = lead.location.trim();
            const key = trimmed.toLowerCase();
            if (!uniqueLocationsMap.has(key)) {
              uniqueLocationsMap.set(key, capitalizeFirst(trimmed));
            }
          }

        // Vehicle Models (may be comma-separated)
        if (lead.vehicleModel && lead.vehicleModel.trim() !== "") {
            lead.vehicleModel.split(",").forEach((model) => {
                const trimmed = model.trim();
                const key = trimmed.toLowerCase();
                if (trimmed && !uniqueVehicleModelsMap.has(key)) {
                    uniqueVehicleModelsMap.set(key, capitalizeFirst(trimmed));
                }
            });
        }

        // Page URLs (strip query params)
        if (lead.pageUrl && lead.pageUrl.trim() !== "") {
            try {
                const url = new URL(lead.pageUrl);
                const cleanUrl = `${url.origin}${url.pathname}`;
                uniquePageUrls.add(cleanUrl);
            } catch (err) {
                console.warn("Invalid URL:", lead.pageUrl);
            }
        }
    });

    const locations = [...uniqueLocationsMap.values()];
    const vehicleModels = [...uniqueVehicleModelsMap.values()];
    const pageUrls = [...uniquePageUrls];

    return {
        locations,
        vehicleModels,
        pageUrls,
    };
}
