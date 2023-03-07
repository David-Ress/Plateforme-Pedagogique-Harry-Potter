/* eslint-disable no-nested-ternary */
import { useSelector } from 'react-redux';
import LogoGryffindor from 'src/assets/img/blason-gryffondor.png';
import LogoSlytherin from 'src/assets/img/blason-serpentard.png';
import LogoHufflepuff from 'src/assets/img/blason-poufsouffle.png';
import LogoRavenclaw from 'src/assets/img/blason-serdaigle.png';
import Student from './Student';
// import studentData from '../../../db/students.json';
import './style.scss';

const WizardRanking = () => {
  const studentData = useSelector((state) => state.student.topStudentsList);
  return (
    <div className="wizard-ranking">
      <h2 className="wizard-type">Classement des meilleurs sorciers</h2>
      {studentData.map((student) => (
        <Student
          key={student.id}
          {...student}
          houseLogo={
            student.house_name === 'Serpentard' ? LogoSlytherin
              : student.house_name === 'Poufsouffle' ? LogoHufflepuff
                : student.house_name === 'Serdaigle' ? LogoRavenclaw
                  : student.house_name === 'Gryffondor' ? LogoGryffindor
                    : null
        }
        />
      ))}
    </div>
  );
};

export default WizardRanking;
