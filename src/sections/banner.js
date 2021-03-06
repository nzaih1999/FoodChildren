/** @jsx jsx */
import { useState } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { jsx, Box, Container, Grid, Button, Heading, Text } from 'theme-ui';
import Modal, { CloseButton } from 'components/modal/modal';
import ResponsiveIframe from 'components/responsive-iframe';
import Image from 'components/image';
import videoBanner from 'assets/images/photo1.jpg';
import happyComrades from 'assets/images/photo2.jpg'
import play from 'assets/images/icons/play.png';
import paint1 from 'assets/images/paint1.svg';
import paint2 from 'assets/images/paint2.svg';

const list = [
  'Affordable Meals',
  'Life insurance',
  'Food Securuty',
  'Help Graduates',
];

const VideoIntro = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.videoWrapper}>
            <Modal isOpen={isOpen}>
              <CloseButton
                onClick={() => setIsOpen(false)}
                size="24px"
                color="#fff"
              />
              <ResponsiveIframe
                src="https://player.vimeo.com/video/394343710?autoplay=1&color=28DDB2&title=0&byline=0&portrait=0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </Modal>

            <Image
              src={happyComrades}
              width="795"
              height="557"
              className="video-banner"
              alt="video banner"
            />
           
          </Box>
          <Box sx={styles.content}>
          <Image
              src={videoBanner}
              width="795"
              height="557"
              className="video-banner"
              alt="video banner"
            />
            <Heading sx={styles.title}>
             Lets Bring Hope To Our Future Generations Together!
             <br/>
              </Heading>
            <Text as="p" sx={styles.title}>
              <br/>
              Come Join Us Make Change<br/>
              
            </Text>
        
          </Box>
        </Box>
            
      </Container>
    </Box>
  );
};

export default VideoIntro;

const styles = {
  section: {
    pt: [20, null, null, 6, null, null, 13],
    pb: [0, null, null, 8, null, null, 11],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    gap: '0 30px',
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr',
      '1fr 1fr',
      '600px 1fr',
      '760px 1fr',
    ],
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mt: [2, null, null, 0, 4, 0],
    '.video-banner': {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    pt: [5, null, null, 6, null, null, 13],
    px: [null, null, null, 8, 0],
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, null, null, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    img: {
      mr: '16px',
    },
  },
  title: {
    color: 'heading',
    fontWeight: 500,
    fontSize: [5, null, null, 10, null, 11],
    lineHeight: 1.53,
    letterSpacing: ['-0.5px', null, null, '-1px'],
    textAlign: ['center', null, null, 'left'],
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontSize: [1, null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    mt: [4, null, null, 5, 3, 5],
    maxWidth: 470,
    textAlign: ['center', null, null, 'left'],
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 180px)'],
    listStyle: 'none',
    mt: [4, null, null, 5, 3, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
  
    button: {
      display: 'flex',
      alignItems:'center',
      minHeight: [45, null, null, 60, 50, 60],
      width: '100',
    },
    buttonGroup: {
      display:'flex',
      textAlign:'center',
      alignItems:'left',
      mt: [5, null, null, 8],
      span: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 1,
        lineHeight: 2.87,
      }
      },
    };

