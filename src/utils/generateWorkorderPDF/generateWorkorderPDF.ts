import jsPDF from 'jspdf';

export const generateWorkorderPDF = (workOrder: Workorder) => {
  const pdf = new jsPDF();

  pdf.setFontSize(18);
  const titleText = `WorkOrder - ${workOrder.title}`;
  const titleWidth = pdf.getStringUnitWidth(titleText) * pdf.internal.scaleFactor;
  const titleX = (pdf.internal.pageSize.width - titleWidth) / 2;
  pdf.text(titleText, titleX, 20);

  pdf.setLineWidth(0.5);
  pdf.setDrawColor(0, 21, 41);
  pdf.line(20, 23, pdf.internal.pageSize.width - 20, 23);

  pdf.setFontSize(12);
  pdf.text(`Description: ${workOrder.description}`, 20, 40);
  pdf.text(`Priority: ${workOrder.priority}`, 20, 50);
  pdf.text(`Status: ${workOrder.status}`, 20, 60);

  pdf.text('Checklist:', 20, 70);

  workOrder.checklist.forEach((item, index) => {
    const yPosition = 80 + index * 10;
    pdf.text(`${index + 1}. ${item.completed ? '[X]' : '[ ]'} ${item.task}`, 20, yPosition);
  });

  pdf.setFontSize(8);
  pdf.text(
    'Tractian - Your Predictive Maintenance Solution',
    20,
    pdf.internal.pageSize.height - 10
  );

  const currentDate = new Date();
  pdf.setFontSize(8);
  const printedOnText = `Printed on: ${currentDate.toLocaleString()}`;
  const printedOnWidth = pdf.getStringUnitWidth(printedOnText) * pdf.internal.scaleFactor;
  const printedOnX = pdf.internal.pageSize.width - printedOnWidth - 20;
  pdf.text(printedOnText, printedOnX, pdf.internal.pageSize.height - 10);

  pdf.save(`Workorder_${workOrder.id}_${workOrder.title}.pdf`);
};
