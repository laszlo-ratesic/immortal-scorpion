import { useEffect, useState } from 'react';
import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';

import useTheme from '@/store/theme';

const resumeLink = '/KeenanChiassonResume.pdf';
const pdf = '/KeenanChiassonResume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CV = () => {
  const [theme] = useTheme();
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <AwesomeButton
        className="cv-btn"
        type={theme === 'light' ? 'primary' : 'secondary'}
        href={pdf}
        target="_blank"
        style={{ maxWidth: '250px', marginBottom: '2rem' }}
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </AwesomeButton>
      <Document file={resumeLink} className="d-flex justify-content-center">
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
      </Document>
      <AwesomeButton
        className="cv-btn"
        type={theme === 'light' ? 'primary' : 'secondary'}
        href={pdf}
        target="_blank"
        style={{ maxWidth: '250px', marginTop: '2rem' }}
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </AwesomeButton>
    </>
  );
};

export default CV;
