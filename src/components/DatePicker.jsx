import {
    Stack,
    createListCollection,
    For,
  } from "@chakra-ui/react";
  import {
    SelectRoot,
    SelectTrigger,
    SelectValueText,
    SelectContent,
    SelectItem,
    SelectLabel,
  } from "./ui/select";
  
  const DatePicker = ({ value, onChange }) => {
    return (
      <Stack direction={'row'} gap="5" maxWidth="500px">
        <For each={["Día", "Mes", "Año"]}>
          {(tipo) => (
            <SelectRoot
              key={tipo}
              collection={
                tipo === "Día"
                  ? dias
                  : tipo === "Mes"
                  ? meses
                  : anios
              }
              value={value[tipo.toLowerCase()]}
              onValueChange={(newValue) =>
                onChange({
                  ...value,
                  [tipo.toLowerCase()]: newValue,
                })
              }
            >
              <SelectLabel>Seleccionar {tipo}</SelectLabel>
              <SelectTrigger>
                <SelectValueText placeholder={`Seleccionar ${tipo}`} />
              </SelectTrigger>
              <SelectContent>
                {(
                  tipo === "Día" ? dias.items :
                  tipo === "Mes" ? meses.items : 
                  anios.items
                ).map((item) => (
                  <SelectItem item={item} key={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          )}
        </For>
      </Stack>
    );
  };
  
  // Generadores de días, meses y años
  const dias = createListCollection({
    items: Array.from({ length: 31 }, (_, i) => ({
      label: (i + 1).toString(),
      value: (i + 1).toString(),
    })),
  });
  
  const meses = createListCollection({
    items: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ].map((mes, index) => ({
      label: mes,
      value: (index + 1).toString(),
    })),
  });
  
  const anios = createListCollection({
    items: Array.from(
      { length: 30 },
      (_, i) => ({
        label: (2015 + i).toString(),
        value: (2015 + i).toString(),
      })
    ),
  });
  
  export default DatePicker;
  