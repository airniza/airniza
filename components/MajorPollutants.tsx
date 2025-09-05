import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MajorPollutantsProps {
  pm25: number
  pm10: number
  no2: number
  o3: number
  co: number
  so2: number
  place?: string
}

export default function MajorPollutants({
  pm25,
  pm10,
  no2,
  o3,
  co,
  so2,
  place,
}: MajorPollutantsProps) {
  const pollutants = [
    { name: "PM2.5", value: pm25, unit: "µg/m³" },
    { name: "PM10", value: pm10, unit: "µg/m³" },
    { name: "O₃", value: o3, unit: "ppm" },
    { name: "CO", value: co, unit: "ppm" },
    { name: "NO₂", value: no2, unit: "ppb" },
    { name: "SO₂", value: so2, unit: "ppb" },
  ]

  const getPollutantStatus = (name: string, value: number) => {
    let status: "Good" | "Moderate" | "Unhealthy" = "Good"
    let level = 0

    switch (name) {
      case "PM2.5":
        if (value <= 12) status = "Good"
        else if (value <= 35.4) status = "Moderate"
        else status = "Unhealthy"
        level = Math.min((value / 150) * 100, 100)
        break
      case "PM10":
        if (value <= 54) status = "Good"
        else if (value <= 154) status = "Moderate"
        else status = "Unhealthy"
        level = Math.min((value / 200) * 100, 100)
        break
      case "O₃":
        if (value <= 0.054) status = "Good"
        else if (value <= 0.070) status = "Moderate"
        else status = "Unhealthy"
        level = Math.min((value / 0.2) * 100, 100)
        break
      case "CO":
        if (value <= 4.4) status = "Good"
        else if (value <= 9.4) status = "Moderate"
        else status = "Unhealthy"
        level = Math.min((value / 50) * 100, 100)
        break
      case "NO₂":
        if (value <= 53) status = "Good"
        else if (value <= 100) status = "Moderate"
        else status = "Unhealthy"
        level = Math.min((value / 200) * 100, 100)
        break
      case "SO₂":
        if (value <= 35) status = "Good"
        else if (value <= 75) status = "Moderate"
        else status = "Unhealthy"
        level = Math.min((value / 200) * 100, 100)
        break
    }

    // Badge mapping
    let colorClass = "bg-green-500"
    if (status === "Good") colorClass = "bg-green-500"
    else if (status === "Moderate") colorClass = "bg-yellow-500"
    else if (status === "Unhealthy") colorClass = "bg-red-500"

    return { label: status, level, colorClass }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-5">
        Major Pollutants <span className="text-primary">{place}</span>
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pollutants.map((p) => {
          const { label, level, colorClass } = getPollutantStatus(p.name, p.value)
          return (
            <Card key={p.name} className="rounded-2xl shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{p.name}</CardTitle>
                <Badge className={`text-xs ${colorClass} text-white`}>
                  {label}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">
                  {p.value} {p.unit}
                </p>
                <div className="w-full h-3 rounded-full bg-gray-200 mt-2 overflow-hidden">
                  <div
                    className={`${colorClass} h-full transition-all duration-500`}
                    style={{ width: `${level}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
