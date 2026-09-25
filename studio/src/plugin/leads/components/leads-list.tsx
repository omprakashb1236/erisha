import { Container, Heading, Stack } from "@sanity/ui";
import styles from "../styles/leads-list.module.css";
import { Lead } from "./LeadsTool";


interface LeadsListProps {
  leads: Lead[];
}

export interface UtmProps {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
}

export default function LeadsList({ leads }: LeadsListProps) {
  return (
    

      <LeadsTable leads={leads} />

  );
}

function maskPhone(phone: string): string {
  if (!phone) return "N/A";
  if (phone.length <= 4) return "****";
  return phone.slice(0, -4) + "****";
}

function maskEmail(email: string): string {
  if (!email.includes("@")) return "N/A";

  const [local, domain] = email.split("@");

  // Mask local part (before @)
  let maskedLocal = "";
  if (local.length < 5) {
    maskedLocal = "*".repeat(local.length);
  } else if (local.length <= 8) {
    maskedLocal = local.slice(0, 2) + "..." + local.slice(-2);
  } else {
    maskedLocal = local.slice(0, 4) + "..." + local.slice(-4);
  }

  // Domain masking logic
  const domainParts = domain.split(".");
  if (domainParts.length < 2) return "N/A";

  const domainName = domainParts[0];
  const domainExt = domainParts.slice(1).join(".");

  // Get middle character(s) from domainName
  let middle = "";
  const len = domainName.length;

  if (len === 0) {
    middle = "";
  } else if (len % 2 === 1) {
    // odd length – 1 middle character
    const mid = Math.floor(len / 2);
    middle = domainName[mid];
  } else {
    // even length – 2 middle characters
    const mid = len / 2;
    middle = domainName[mid - 1] + domainName[mid];
  }

  const maskedDomain = `**${middle}**`;

  return `${maskedLocal}@${maskedDomain}.${domainExt}`;
}

// Define the LeadsTable component
function LeadsTable({ leads }: LeadsListProps) {
  return (
    <Stack >
      {leads?.length === 0 ? (
        <Heading style={{ padding: "20px", fontSize: "14px" }}>
          You have no leads
        </Heading>
      ) : (
        <div className="table-responsive">
          <table
            className={`${styles.mainTable} table table-bordered table-striped`}
          >
            <thead>
              <tr>
                <th>Sno</th>
                <th>Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Form Type</th>
                <th>Landing page</th>
                <th>Fleet Size</th>
                <th>Company Name</th>
                <th>Vehicle Make</th>
                <th>Vehicle Model</th>
                <th>Location</th>
                <th>Model Year</th>
                <th>Service Center</th>
                <th>Type</th>
                <th>Do You want us to contact you</th>
                <th>Page URL</th>
                <th>Comments</th>
                <th>UTM Source</th>
                <th>UTM Medium</th>
                <th>UTM Campaign</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {leads?.map((lead, index) => {
                const {
                  title,
                  firstName,
                  lastName,
                  email,
                  phone,
                  fleetSize,
                  companyName,
                  comments,
                  formType,
                  vehicleMake,
                  vehicleModel,
                  location,
                  modelYear,
                  serviceCenter,
                  type,
                  contactYou,
                  pageUrl,
                  _createdAt,
                } = lead;

                const url = pageUrl ? new URL(pageUrl) : { hostname: "N/A", pathname: "", searchParams: new URLSearchParams() };
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
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{title || "N/A"}</td>
                    <td>{firstName || "N/A"}</td>
                    <td>{lastName || "N/A"}</td>
                    <td>{email
                        ? maskEmail(email)
                        : "N/A"}</td>
                    <td> {phone
                        ? maskPhone(phone)
                        : "N/A"}</td>
                    <td>{formType || "N/A"}</td>
                    <td>{landingPage || "N/A"}</td>
                    <td>{fleetSize || "N/A"}</td>
                    <td>{companyName || "N/A"}</td>
                    <td>{vehicleMake || "N/A"}</td>
                    <td>{vehicleModel || "N/A"}</td>
                    <td>{location || "N/A"}</td>
                    <td>{modelYear || "N/A"}</td>
                    <td>{serviceCenter || "N/A"}</td>
                    <td>{type || "N/A"}</td>
                    <td>{contactYou || "N/A"}</td>
                    <td>{pageUrl || "N/A"}</td>
                    <td>{comments || "N/A"}</td>
                    <td>{utmParameters.utm_source}</td>
                    <td>{utmParameters.utm_medium}</td>
                    <td>{utmParameters.utm_campaign}</td>
                    <td>{new Date(_createdAt).toLocaleString() || "N/A"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </Stack>
  );
}
