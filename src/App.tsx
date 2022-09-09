import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const posts = [
    {
      title: 'Anandinha Sá',
      resume: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repudiandae consequuntur maiores quaerat assumenda, enim ea ab reiciendis, dolor culpa doloribus explicabo consequatur vero voluptatibus ducimus eligendi? Provident, maiores vitae.',
    },
    {
      title: 'Anandinha Sá 2',
      resume: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repudiandae consequuntur maiores quaerat assumenda, enim ea ab reiciendis, dolor culpa doloribus explicabo consequatur vero voluptatibus ducimus eligendi? Provident, maiores vitae.',
    },
    {
      title: 'Anandinha Sá 3',
      resume: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repudiandae consequuntur maiores quaerat assumenda, enim ea ab reiciendis, dolor culpa doloribus explicabo consequatur vero voluptatibus ducimus eligendi? Provident, maiores vitae.',
    },
    {
      title: 'Anandinha Sá 4',
      resume: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repudiandae consequuntur maiores quaerat assumenda, enim ea ab reiciendis, dolor culpa doloribus explicabo consequatur vero voluptatibus ducimus eligendi? Provident, maiores vitae.',
    },
    {
      title: 'Anandinha Sá 5',
      resume: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repudiandae consequuntur maiores quaerat assumenda, enim ea ab reiciendis, dolor culpa doloribus explicabo consequatur vero voluptatibus ducimus eligendi? Provident, maiores vitae.',
    }
  ]

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000); // 3000ms -> 3s
  }, []);

  return (
    <>
    <div>
      {posts.map((item) => (
        <>
         {loading ? <Skeleton circle={true} width={150} height={150} style={{ marginTop: '20px', marginBottom: '20px' }} /> : <img src="https://pbs.twimg.com/profile_images/1001169618441003009/y00d4GJO_400x400.jpg" width={150} height={150} style={{borderRadius: '75px'}} />}
         {loading ? <Skeleton width="40%" height={60} style={{ marginTop: '20px', marginBottom: '20px' }}  /> : <h1>{item.title}</h1>}
         {loading ? <Skeleton count={2} />  : <p>{item.resume}</p>}
        </>
      ))}
   
    </div>
    </>
  );
}

export default App;
