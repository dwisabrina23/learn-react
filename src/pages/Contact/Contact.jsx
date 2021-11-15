import React from 'react';
import Form from '../../components/Form';
import SideBanner from '../../components/SideBanner';

function Contact() {
    return (
        <div>
           <div className="row row-cols-sm-1 row-cols-sm-2 h-100">
                <SideBanner/>
                <Form/>
            </div> 
        </div>
    );
}

export default Contact;