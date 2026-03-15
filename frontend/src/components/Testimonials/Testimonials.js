import { useState, useEffect } from 'react';
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import './Testimonials.scss';

function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'testimonials'));
      const testimonialsList = querySnapshot.docs.map(doc => ({
        id: doc.id, // Access the document ID
        ...doc.data() // Access the document data
      }));
      setTestimonials(testimonialsList);
      setLoading(false);
    };

    fetchPosts().catch(console.error);
  }, []); // The empty dependency array ensures this runs once when the component mounts

    if (loading) return <p>Loading...</p>;

    return (
        <div className='testimonials'>
        {testimonials.map(testimonial => (
            <div key={testimonial.id} className='data'>
            <p className='testimonial'>{testimonial.testimonial}</p>
            <p className='client'>{testimonial.client}</p>
            </div>
        ))}
        </div>
    );
}

export default Testimonials;