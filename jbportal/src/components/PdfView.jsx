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
        cursor: 'pointer',
      }}
      onClick={handlePdfClick}
    >
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <div style={{ width: '100%', maxWidth: '1000px', height: 'auto' }}>
          <Viewer
            fileUrl={pdfUrl}
            defaultScale={window.innerWidth < 640 ? 0.5 : 0.8} // Escala adaptativa para mobile e desktop
          />
        </div>
      </Worker>
    </div>
  );
};

export default PdfViewer;
