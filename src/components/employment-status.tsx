
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Permanent", desktop: 60, fill: "#029BDE" },
  { month: "Contract", desktop: 20, fail: "#F96D20" },
  { month: "Probation", desktop: 20, fill: "#5D54D5" },
]

const chartConfig = {
  desktop: {
    label: "Employment Status",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function EmploymentStatus() {
  return (
    <div>
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 20,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 20)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5}>
            <LabelList
              position="top"
              offset={5}
              className="fill-foreground"
              fontSize={10}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  )
}
