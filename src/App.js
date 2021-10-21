import './App.css';
import PageOne from './componants/PageOne';
import PageTow from './componants/PageTow';
import PageThree from './componants/PageThree';
import { PDFViewer } from '@react-pdf/renderer';
function App() {
	return (
		<PDFViewer className='App'>
			<PageOne />
			<PageTow />
			<PageOne />
		</PDFViewer>
	);
}

export default App;
