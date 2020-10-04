import React from 'react';
import { PDFViewer,  PDFDownloadLink} from '@react-pdf/renderer';
import {   
  Text,
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  View, 
} from '@react-pdf/renderer';
import OpenSansRegular from './fonts/fonts/Open_Sans/OpenSans-Regular.ttf';
import LatoRegular from './fonts/fonts/Lato/Lato-Regular.ttf';
import LatoItalic from './fonts/fonts/Lato/Lato-Italic.ttf';
import LatoBold from './fonts/fonts/Lato/Lato-Bold.ttf';
import Logo from './loooogo.jpg'
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    textAlign: 'center',
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
});

Font.register( {
  family: 'Open Sans',
  src: OpenSansRegular,
});
Font.register( {
  family: 'Lato',
  src: LatoRegular,
});
Font.register( {
  family: 'Lato Italic',
  src: LatoItalic,
});
Font.register( {
  family: 'Lato Bold',
  src: LatoBold,
});

const Resume = props => {
  console.log(props)
  console.log(__dirname)
  return (
  <Page {...props} style={styles.page}>
    <Header />
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image
          src={Logo}
          style={styles.image}
        />
        <Education />
        <Skills />
      </View>
      <Experience />
    </View>
    <Text style={styles.footer}>This IS the candidate you are looking for</Text>
  </Page>
  )

} 


// Create Document Component
const Output = () => (
  <Document
    author="Luke Skywalker"
    keywords="awesome, resume, start wars"
    subject="The resume of Luke Skywalker"
    title="Resume"
  >
    <Resume size="A4"/>
    {/* <Resume orientation="landscape" size="A4" /> */}
    {/* <Resume size={[380, 1250]}/> */}
  </Document>
);

const App = () => (
  <>
    <PDFViewer>
      <Output/>
    </PDFViewer>
    <PDFDownloadLink
      document={<Output/>}
      fileName="CV.pdf"
    >
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </>
);

export default App;
