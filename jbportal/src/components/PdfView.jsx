import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = () => {
  const pdfUrl = './pdf/organograma.pdf';

  const handlePdfClick = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer' // Adiciona um cursor pointer para indicar que o div é clicável
      }}
      onClick={handlePdfClick}
    >
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer 
          fileUrl={pdfUrl} 
          defaultScale={0.7} // Define a escala para 70%
        />
      </Worker>
    </div>
  );
};

export default PdfViewer;
