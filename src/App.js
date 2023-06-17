import './App.css';
import Video from './pages/Video';
function App() {
  return (
    <div className="App">
      <div className='app__videos'> 
        <Video
          likes={250}
          messages={150}
          shares={100}
          name="Paulo"
          description="Gato goleiro"
          music="música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
       
      </div>
    </div>
  );
}

export default App;
