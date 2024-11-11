  'use client'

  import React, { useState } from 'react'
  import { Button } from "@/app/components/ui/button"
  import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/Card"
  import { format } from "date-fns"
  import { Calendar } from "@/app/components/ui/Calendar" // Ensure this path is correct and the module exists
  import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/Popover"
  import { cn } from "@/app/lib/utils"
  import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react"
  import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/app/components/ui/Command"

  const ciudades = [
    { nombre: "El Calafate", codigo: "ECA" },
    { nombre: "Jujuy", codigo: "JUJ" },
    { nombre: "Ushuaia/Malvinas Argentinas", codigo: "USU" },
    { nombre: "San Carlos de Bariloche", codigo: "BAR" },
    { nombre: "Comodoro Rivadavia", codigo: "CRV" },
    { nombre: "Tucumán", codigo: "TUC" },
    { nombre: "Mendoza", codigo: "DOZ" },
    { nombre: "Salta", codigo: "SAL" },
    { nombre: "Córdoba", codigo: "CBA" },
    { nombre: "Ezeiza", codigo: "EZE" },
    { nombre: "Trelew", codigo: "TRE" },
    { nombre: "Mar del Plata", codigo: "MDP" },
    { nombre: "Viedma", codigo: "VIE" },
    { nombre: "Resistencia", codigo: "SIS" },
    { nombre: "Posadas", codigo: "POS" },
    { nombre: "Neuquén", codigo: "NEU" },
    { nombre: "Bahía Blanca", codigo: "BCA" },
    { nombre: "Corrientes", codigo: "CRR" },
    { nombre: "Esquel", codigo: "ESQ" },
    { nombre: "Cataratas del Iguazú", codigo: "IGU" },
    { nombre: "Rosario", codigo: "ROS" },
    { nombre: "San Rafael", codigo: "SRA" },
    { nombre: "San Juan", codigo: "JUA" },
    { nombre: "Santa Rosa", codigo: "OSA" },
    { nombre: "Río Gallegos", codigo: "GAL" },
    { nombre: "Río Grande", codigo: "GRA" },
    { nombre: "Río Cuarto", codigo: "TRC" },
    { nombre: "Santa Fé", codigo: "SVO" },
    { nombre: "San Luis", codigo: "UIS" },
    { nombre: "Paraná", codigo: "PAR" },
    { nombre: "San Martín de los Andes", codigo: "CHP" },
    { nombre: "Santiago del Estero", codigo: "SDE" },
    { nombre: "La Rioja", codigo: "LAR" },
    { nombre: "Catamarca", codigo: "CAT" },
    { nombre: "Buenos Aires", codigo: "AER" },
    { nombre: "Puerto Madryn", codigo: "DRY" },
    { nombre: "Formosa", codigo: "FSA" },
    { nombre: "Termas de Río Hondo", codigo: "TRH" },
    { nombre: "Malargüe", codigo: "MLG" }
  ]


  const aerolineas = [
    { nombre: "Aerolíneas Argentinas", codigo: "AEROLINEAS ARGENTINAS SA" },
    { nombre: "Flybondi", codigo: "FB LÍNEAS AÉREAS - FLYBONDI" },
    { nombre: "JetSmart", codigo: "JETSMART AIRLINES S.A." },
    { nombre: "LADE", codigo: "LADE" },
    { nombre: "American Jet", codigo: "AMERICAN JET S.A." },
  ]

  const periodosDia = [
    { nombre: "Mañana", valor: "Mañana-mañana" },
    { nombre: "Tarde", valor: "Tarde-tarde" },
    { nombre: "Noche", valor: "Noche-noche" },
  ]

  interface DatePickerProps {
    date: Date | null
    setDate: (date: Date | null) => void
    label: string
  }

  function DatePicker({ date, setDate, label }: DatePickerProps) {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-200">{label}</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date ? "text-gray-400" : "text-white",
                "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:text-white"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Seleccionar fecha</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              className="bg-gray-800 text-white"
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }

  interface ComboboxProps {
    options: Array<{ nombre: string; codigo?: string; valor?: string }>
    value: string
    onChange: (value: string) => void
    placeholder: string
    label: string
  }

  function Combobox({ options, value, onChange, placeholder, label }: ComboboxProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-200">{label}</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between",
              !value ? "text-gray-400" : "text-white",
              "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:text-white"
            )}
          >
            {value
              ? options.find((option) => option.codigo === value || option.valor === value)?.nombre || placeholder
              : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 bg-gray-800 border-gray-700">
          <Command>
            <CommandInput placeholder={`Buscar ${label.toLowerCase()}...`} className="h-9 bg-gray-800 text-white" />
            <CommandEmpty>No se encontraron resultados.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.codigo || option.valor}
                  onSelect={() => {
                    onChange(option.codigo || option.valor || '')
                    setOpen(false) // Cierra el Popover después de seleccionar la opción
                  }}
                  className="text-white hover:bg-gray-700"
                >
                  {option.nombre}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      (option.codigo === value || option.valor === value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}


  export default function SelectorVuelos() {
    const [origen, setOrigen] = useState("")
    const [destino, setDestino] = useState("")
    const [aerolinea, setAerolinea] = useState("")
    const [fecha, setFecha] = useState<Date | null>(null)
    const [horario, setHorario] = useState("Mañana-mañana")
    const [respuestaAPI, setRespuestaAPI] = useState("")

    const enviarDatos = async () => {
      if (!origen || !destino || !aerolinea || !fecha) {
        setRespuestaAPI("Por favor, complete todos los campos.")
        return
      }

      const data = {
        Origen: origen,
        Destino: destino,
        Aerolinea: aerolinea,
        Fecha: format(fecha, 'yyyy-MM-dd'),
        periodo_dia: horario
      }

      try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const result = await response.json()
        setRespuestaAPI(`Predicción: ${result.prediction}`)
      } catch (error) {
        console.error('Error:', error)
        setRespuestaAPI('Error al procesar la solicitud.')
      }
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
        <Card className="w-full max-w-md bg-gray-800 border-gray-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-white">Buscar Vuelos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Combobox
              options={ciudades}
              value={origen}
              onChange={setOrigen}
              placeholder="Seleccione origen"
              label="Origen"
            />
            <Combobox
              options={ciudades}
              value={destino}
              onChange={setDestino}
              placeholder="Seleccione destino"
              label="Destino"
            />
            <Combobox
              options={aerolineas}
              value={aerolinea}
              onChange={setAerolinea}
              placeholder="Seleccione aerolínea"
              label="Aerolínea"
            />
            <DatePicker date={fecha} setDate={setFecha} label="Fecha de Vuelo" />
            <Combobox
              options={periodosDia}
              value={horario}
              onChange={setHorario}
              placeholder="Seleccione momento del día"
              label="Momento del Día"
            />
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Button onClick={enviarDatos} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              Buscar Vuelos
            </Button>
            {respuestaAPI && (
              <p className="mt-4 text-sm text-center text-gray-300">{respuestaAPI}</p>
            )}
          </CardFooter>
        </Card>
      </div>
    )
  }