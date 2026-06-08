/**
 * GTM Weekly Schedule — summary component (plain JavaScript .jsx)
 * Mid-Market UK Account Executive operating rhythm.
 */
export default function Component() {
  const week = [
    { day: "Monday", theme: "Plan & Prospect", blocks: "Outbound x1, Discovery, Pipeline standup" },
    { day: "Tuesday", theme: "Demos & Discovery", blocks: "Outbound x1, Demos w/ SE, Qualification" },
    { day: "Wednesday", theme: "Pipeline & Champions", blocks: "Deal advancement, Pipeline review, Negotiation" },
    { day: "Thursday", theme: "Closing & Expansion", blocks: "Outbound x1, Closing calls, POC kickoffs" },
    { day: "Friday", theme: "Advance & Reset", blocks: "Nurture, Forecast, Enablement, Account planning" },
  ]

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-1">GTM Weekly Schedule</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4">Mid-Market — UK (GMT/BST)</p>
      <div className="grid grid-cols-1 gap-4">
        {week.map((item) => (
          <div key={item.day} className="border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0 last:pb-0">
            <div className="flex items-center justify-between">
              <span className="font-medium">{item.day}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{item.theme}</span>
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.blocks}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
