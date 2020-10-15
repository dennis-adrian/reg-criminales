import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from 'moment';

// define a generatePDF function that accepts a criminals argument
const pdfReportGenerator = (criminals) => {
    // initialize jsPDF
    const doc = new jsPDF();

    // define the columns we want and their titles
    const tableColumn = ["#", "Apellidos", "Nombres", "Cédula", "Género", "Fecha de Nacimiento", "País de Origen"];
    // define an empty array of rows
    const tableRows = [];

    // for each criminal pass all its data into an array
    let counter = 1;
    criminals.forEach(criminal => {
        const criminalsData = [
            counter++,
            criminal.apellidos,
            criminal.nombres,
            criminal.ci,
            criminal.genero,
            moment(criminal.fechaNacimiento).format('ll'),
            criminal.paisOrigen,
        ];
        // push each criminal's info into a row
        tableRows.push(criminalsData);
    });


    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date().split(" ");
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    // criminal title. and margin-top + margin-left
    doc.text("Reporte de cirminales según criterios personalizados", 14, 15);
    // we define the name of our PDF file.
    doc.save(`report_${dateStr}.pdf`);
};

export default pdfReportGenerator;