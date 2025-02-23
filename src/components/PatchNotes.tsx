import React from 'react';

interface PatchNote {
  version: string;
  date: string;
  changes: string[];
}

interface PatchNotesProps {
  notes: PatchNote[];
}

const PatchNotes: React.FC<PatchNotesProps> = ({ notes }) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-white">Patch Notes</h1>
      
      {notes.map((note, index) => (
        <div key={index} className="mb-8 border-b border-gray-700 pb-6 last:border-b-0">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Version {note.version}</h2>
            <span className="text-gray-400">{note.date}</span>
          </div>
          
          <ul className="space-y-2">
            {note.changes.map((change, changeIndex) => (
              <li key={changeIndex} className="flex items-start text-gray-300">
                <span className="mr-2">•</span>
                <span>{change}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PatchNotes; 