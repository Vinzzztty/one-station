import { getAllContacts } from "@/services/contact.service";
import { format } from "date-fns";

export default async function ContactsPage() {
  const contacts = await getAllContacts();

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Contacts</h2>
          <p className="text-muted mt-1">
            View and manage contact form submissions.
          </p>
        </div>
      </div>

      {/* TABLE CARD */}
      <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-border bg-background/50 text-muted text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Email / Phone</th>
                <th className="p-4 font-semibold">Service</th>
                <th className="p-4 font-semibold">Budget</th>
                <th className="p-4 font-semibold">Message</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {contacts.map((item) => (
                <tr
                  key={item.id}
                  className="group hover:bg-background transition-colors"
                >
                  <td className="p-4 text-sm text-muted whitespace-nowrap align-top">
                    {format(new Date(item.createdAt), "MMM dd, yyyy")}
                    <br />
                    <span className="text-xs">
                      {format(new Date(item.createdAt), "HH:mm")}
                    </span>
                  </td>

                  <td className="p-4 align-top">
                    <div className="font-medium text-foreground">
                      {item.fullName}
                    </div>
                    {item.businessName && (
                      <div className="text-xs text-muted mt-0.5">
                        {item.businessName}
                      </div>
                    )}
                    <div className="text-xs text-muted mt-0.5">
                      {item.industry}
                    </div>
                  </td>

                  <td className="p-4 text-sm align-top">
                    <div className="text-foreground">{item.email}</div>
                    {item.phone && (
                      <div className="text-muted text-xs mt-0.5">
                        {item.phone}
                      </div>
                    )}
                  </td>

                  <td className="p-4 align-top">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {item.service}
                    </span>
                  </td>

                  <td className="p-4 text-sm text-muted whitespace-nowrap align-top">
                    {item.budget}
                  </td>

                  <td className="p-4 text-sm text-muted align-top max-w-[300px]">
                    <p className="line-clamp-3" title={item.message}>
                      {item.message}
                    </p>
                  </td>
                </tr>
              ))}

              {contacts.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-muted">
                    No contact submissions yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-muted pt-2">
        <span>
          Showing 1-{contacts.length} of {contacts.length} submissions
        </span>
      </div>
    </div>
  );
}
