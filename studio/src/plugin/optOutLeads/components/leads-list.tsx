import { Heading, Stack } from "@sanity/ui";
import styles from "../styles/leads-list.module.css";
import { Lead } from "./LeadsTool";


interface LeadsListProps {
  leads: Lead[];
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
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Do you wish to stop receiving marketing communications from Geely?</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {leads?.map((lead, index) => {
                const {
                  name,
                  email,
                  phone,
                  stopMarketing,
                  _createdAt,
                } = lead;

               
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name || "N/A"}</td>
                    <td>{email
                        ? maskEmail(email)
                        : "N/A"}</td>
                    <td>{phone
                        ? maskPhone(phone)
                        : "N/A"}</td>
                    <td>{stopMarketing || "N/A"}</td>
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
