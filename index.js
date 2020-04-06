// const pdfMakePrinter = require('pdfmake/src/printer');
// // const pdfMake = require('pdfmake/src/printer');

var fonts = {
  Courier: {
    normal: 'Courier',
    bold: 'Courier-Bold',
    italics: 'Courier-Oblique',
    bolditalics: 'Courier-BoldOblique'
  },
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique'
  },
  Times: {
    normal: 'Times-Roman',
    bold: 'Times-Bold',
    italics: 'Times-Italic',
    bolditalics: 'Times-BoldItalic'
  },
  Symbol: {
    normal: 'Symbol'
  },
  ZapfDingbats: {
    normal: 'ZapfDingbats'
  }
};

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

var docDefinition = {
  userPassword: '123',
  ownerPassword: '123456',
  permissions: {
    printing: 'highResolution', //'lowResolution'
    modifying: false,
    copying: false,
    annotating: true,
    fillingForms: true,
    contentAccessibility: true,
    documentAssembly: true
  },
  content: [
    [
      {
        alignment: 'center',
        text: 'PPRA',
        style: 'header',
        fontSize: 23,
        bold: true,
        margin: [0, 10],
      },
      {
        margin: [0, 0, 0, 10],
        layout: {
          fillColor: function (rowIndex, node, columnIndex) {
            return (rowIndex % 2 === 0) ? '#ebebeb' : '#f5f5f5';
          }
        },
        table: {
          widths: ['100%'],
          heights: [10, 10],
          body: [
            [
              {
                text: 'SETOR: ADMINISTRATIVO',
                fontSize: 9,
                bold: true,
              }
            ],
            [
              {
                text: 'FUNÇÃO: DIRETOR DE ENSINO',
                fontSize: 9,
                bold: true
              }
            ],
          ],
        }
      },
      {
        style: 'tableExample',
        layout: {
          fillColor: function (rowIndex, node, columnIndex) {
            return (rowIndex === 0) ? '#c2dec2' : null;
          }
        },
        table: {
          widths: ['30%', '10%', '25%', '35%'],
          heights: [10, 10, 10, 10, 30, 10, 25],
          headerRows: 1,
          body: [
            [
              {
                text: 'AGENTE: Não Identificados',
                colSpan: 3,
                bold: true,
                fontSize: 9
              },
              {
              },
              {
              },
              {
                text: 'GRUPO: Grupo 1 - Riscos Físicos',
                fontSize: 9,
                bold: true
              }
            ],
            [
              {
                text: 'Limite de Tolerância:',
                fontSize: 9,
                bold: true
              },
              {
                text: 'Meio de Propagação:',
                colSpan: 3,
                fontSize: 9,
                bold: true
              },
              {
              },
              {
              }
            ],
            [
              {
                text: [
                  'Frequência: ',
                  {
                    text: 'Habitual',
                    bold: false
                  }
                ],
                fontSize: 9,
                bold: true
              },
              {
                text: [
                  'Classificação do Efeito: ',
                  {
                    text: 'Leve',
                    bold: false
                  }
                ],
                colSpan: 3,
                fontSize: 9,
                bold: true
              },
              {
              },
              {
              }
            ],
            [
              {
                text: 'Tempo de Exposição:',
                colSpan: 2,
                fontSize: 9,
                bold: true
              },
              {
              },
              {
                text: 'Medição:',
                colSpan: 2,
                fontSize: 9,
                bold: true
              },
              {
              }
            ],
            [
              {
                text: 'Fonte Geradora:',
                border: [true, true, false, false],
                colSpan: 2,
                fontSize: 9,
                bold: true
              },
              {
              },
              {
                text: 'Téc. Utilizada:',
                border: [false, true, true, false],
                colSpan: 2,
                fontSize: 9,
                bold: true
              },
              {
              }
            ],
            [
              {
                text: 'Conclusão:',
                border: [true, false, true, true],
                colSpan: 4,
                fontSize: 9,
                bold: true
              },
              {
              },
              {
              },
              {
              }
            ],
            [
              {
                text: 'EPIs/EPCs:',
                border: [true, true, false, true],
                colSpan: 3,
                fontSize: 9,
                bold: true
              },
              {
              },
              {
              },
              {
                text: 'CAs:',
                border: [false, true, true, true],
                fontSize: 9,
                bold: true
              }
            ],
          ]
        }
      }
    ]
  ],
  defaultStyle: {
    font: 'Helvetica'
  }
};

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('document.pdf'));
pdfDoc.end();