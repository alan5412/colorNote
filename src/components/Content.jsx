import { Box, Button, Input, Stack, Textarea, } from "@chakra-ui/react";
import { useState } from "react";
import { Field } from "./ui/field";
import jsPDF from "jspdf";


const Content = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    placas: "",
    marca: "",
    modelo: "",
    trabajo: "",
    costoTotal: "",
    aCuenta: "",
    diaA:"",
    mesA:"",
    añoA:"",
    diaB:"",
    mesB:"",
    añoB:""
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const logoUrl = "../src/assets/logo.jpeg"; // Reemplázalo con la URL de tu logotipo

    // Agregar logotipo y título
    doc.addImage(logoUrl, "PNG", 20, 10, 60, 30); // Logotipo
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Hoja de Servicio", 95, 25);

    // Datos del cliente
    doc.setFontSize(12);
    doc.setFont("Helvetica", "bold");
    doc.text("Nombre del cliente:", 20, 50);
    doc.setFont("Helvetica", "normal");
    doc.text(formData.nombre || "-", 80, 50);

    doc.setFont("Helvetica", "bold");
    doc.text("Placas del carro:", 20, 60);
    doc.setFont("Helvetica", "normal");
    doc.text(formData.placas || "-", 80, 60);

    doc.setFont("Helvetica", "bold");
    doc.text("Marca del auto:", 20, 70);
    doc.setFont("Helvetica", "normal");
    doc.text(formData.marca || "-", 80, 70);

    doc.setFont("Helvetica", "bold");
    doc.text("Modelo del auto:", 20, 80);
    doc.setFont("Helvetica", "normal");
    doc.text(formData.modelo || "-", 80, 80);

    doc.setFont("Helvetica", "bold");
    doc.text("Trabajo a realizar:", 20, 90);
    doc.setFont("Helvetica", "normal");
    doc.text(formData.trabajo || "-", 80, 90, { maxWidth: 100 });
    
    // Fechas
    doc.setFont("Helvetica", "bold");
    doc.text("Fecha de llegada:", 20, 110);
    doc.setFont("Helvetica", "normal");
    doc.text(`${formData.diaA}/${formData.mesA}/${formData.añoA}` || "-", 80, 110, { maxWidth: 100 });
    
    doc.setFont("Helvetica", "bold");
    doc.text("Fecha de salida:", 20, 120);
    doc.setFont("Helvetica", "normal");
    doc.text(`${formData.diaB}/${formData.mesB}/${formData.añoB}` || "-", 80, 120, { maxWidth: 100 });
    // Costos
    doc.setFont("Helvetica", "bold");
    doc.text("Costo Total:", 20, 140);
    doc.setFont("Helvetica", "normal");
    doc.text(`$${formData.costoTotal || "0"}`, 80, 140);

    doc.setFont("Helvetica", "bold");
    doc.text("A cuenta:", 20, 150);
    doc.setFont("Helvetica", "normal");
    doc.text(`$${formData.aCuenta || "0"}`, 80, 150);

    const restante =
      parseFloat(formData.costoTotal || 0) - parseFloat(formData.aCuenta || 0);

    doc.setFont("Helvetica", "bold");
    doc.text("Restante:", 20, 160);
    doc.setFont("Helvetica", "normal");
    doc.text(`$${restante.toFixed(2)}`, 80, 160);

    // Descargar PDF
    doc.save("Hoja_de_Servicio_JARM.pdf");
  };

  return (
    <Box padding={"1rem"} bg={"gray.600"}>
      <Stack color={"white"}>
        <Field label="Nombre">
          <Input
            name="nombre"
            placeholder="Nombre del cliente"
            bg={"gray.900"}
            variant="subtle"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </Field>
        <Field label="Placas">
          <Input
            name="placas"
            placeholder="Placas del carro"
            variant="subtle"
            value={formData.placas}
            onChange={handleInputChange}
          />
        </Field>
        <Field label="Marca">
          <Input
            name="marca"
            placeholder="Marca del auto"
            variant="subtle"
            value={formData.marca}
            onChange={handleInputChange}
          />
        </Field>
        <Field label="Modelo">
          <Input
            name="modelo"
            placeholder="Modelo del auto"
            variant="subtle"
            value={formData.modelo}
            onChange={handleInputChange}
          />
        </Field>
        <Field label="Trabajo a realizar">
          <Textarea
            name="trabajo"
            autoresize
            variant="subtle"
            placeholder="Descripción del trabajo a realizar"
            value={formData.trabajo}
            onChange={handleInputChange}
          />
        </Field>
        <Field label="Costo Total">
          <Input
            name="costoTotal"
            placeholder="$Mxn"
            type="number"
            variant="subtle"
            value={formData.costoTotal}
            onChange={handleInputChange}
          />
        </Field>
        <Field label="A cuenta">
          <Input
            name="aCuenta"
            placeholder="$Mxn"
            type="number"
            variant="subtle"
            value={formData.aCuenta}
            onChange={handleInputChange}
          />
        </Field>

        <Field label="Fecha de llegada">
          <Stack direction={'row'}>
            <Field>
              <Input
                name="diaA"
                placeholder="Dia"
                type="number"
                variant="subtle"
                value={formData.diaA}
                onChange={handleInputChange}
                min={1}
                max={31}
              />
            </Field>
            <Field>
              <Input
                name="mesA"
                placeholder="Mes"
                type="number"
                variant="subtle"
                value={formData.mesA}
                onChange={handleInputChange}
                min={1}
                max={12}
              />
            </Field>
            <Field>
              <Input
                name="añoA"
                placeholder="Año"
                type="number"
                variant="subtle"
                value={formData.añoA}
                onChange={handleInputChange}
                min={2020}
                max={2030}
              />
            </Field>
          </Stack>
        </Field>
        <Field label="Fecha de salida">
        <Stack direction={'row'}>
            <Field>
              <Input
                name="diaB"
                placeholder="Dia"
                type="number"
                variant="subtle"
                value={formData.diaB}
                onChange={handleInputChange}
                min={1}
                max={31}
              />
            </Field>
            <Field>
              <Input
                name="mesB"
                placeholder="Mes"
                type="number"
                variant="subtle"
                value={formData.mesB}
                onChange={handleInputChange}
                min={1}
                max={12}
              />
            </Field>
            <Field>
              <Input
                name="añoB"
                placeholder="Año"
                type="number"
                variant="subtle"
                value={formData.añoB}
                onChange={handleInputChange}
                min={2020}
                max={2030}
              />
            </Field>
          </Stack>
        </Field>
      </Stack>
      <Stack direction={'row'} >
        <Button mt={4} colorPalette="teal" onClick={generatePDF}>
            Generar PDF
        </Button>
      </Stack>
    </Box>
  );
};

export default Content;
