import React from 'react';
import { Award, MapPin, Phone, Mail } from 'lucide-react';

export default function QualityCard() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-lg shadow-xl">
      <div className="flex items-center justify-center mb-6">
        <Award className="h-12 w-12 mr-3" />
        <h3 className="text-2xl font-bold">Quality & Customer Satisfaction</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 mr-2 mt-1" />
          <div>
            <p className="font-semibold">Mayuge multipurpose Industry</p>
            <p>Mayuge Town</p>
            <p>Jinja, 901064</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Phone className="h-5 w-5 mr-2" />
          <p>Tel: 256 200 913 313</p>
        </div>
        
        <div className="flex items-center">
          <Mail className="h-5 w-5 mr-2" />
          <p>Email: mayugemultipurpose.com</p>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-blue-400">
        <p className="text-sm italic">
          "Committed to providing quality jumbo products"
        </p>
      </div>
    </div>
  );
}