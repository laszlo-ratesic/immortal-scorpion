import { useEffect, useState } from 'react';
import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';

import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import ResumeParticles from '@/components/ResumeParticles';
import { ColumnFlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import useTheme from '@/store/theme';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = './KeenanChiassonResume.pdf';

function Resume() {
  const [theme] = useTheme();
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Meta title="Resume" />
      <FullSizeCenteredFlexBox>
        <ColumnFlexBox>
          <Typography variant="h3" style={{ marginBottom: '1em' }}>
            Resume
          </Typography>
          <AwesomeButton
            type={theme === 'light' ? 'primary' : 'secondary'}
            href={pdf}
            target="_blank"
            style={{ maxWidth: '250px', marginBottom: '1em' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </AwesomeButton>
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </ColumnFlexBox>
      </FullSizeCenteredFlexBox>
      <ResumeParticles />
    </>
  );
}

export default Resume;
