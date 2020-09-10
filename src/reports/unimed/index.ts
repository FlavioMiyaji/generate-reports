import path from 'path';
import crypto from 'crypto';
import { ReportRenderer, Report } from 'fluentreports';

interface DataItem {
  date: string;
  guide_number: number;
  patient_name: string;
  care_category: string;
  health_insurance_name: string;
}

interface Data {
  doctor_name: string;
  attendances: DataItem[];
}

const generateData = (): Data => {
  return {
    doctor_name: 'Dr. Cesar Takeo Miyaji',
    attendances: [
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Aadi', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Aafje', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Aaid', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Aalam', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Aali', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Aalilyanna', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Aaliyah', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Aamina', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Aamira', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Baara', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Baba', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Baback', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Babette', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Baby', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Bach Yen', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Bachelor', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Bachué', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Badar', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Cabernet', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Cable', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Cabrera', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Cabriole', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Cache', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Cachet', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Cachi', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Cactus', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Cad', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Dacia', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Dacian', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Dae', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Daemyn', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Daenerys', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Daffodil', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Dafydd', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Dagan', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Dagmar', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Easton', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Eastwood', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Eaton', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Eavan', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Ebba', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Ebbe', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Eben', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Ebenezer', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Ebony', care_category: 'category', health_insurance_name: 'insurance' },
      { date: '09/09/2020', guide_number: Math.floor(Math.random() * 100000), patient_name: 'Fabiana', care_category: 'category', health_insurance_name: 'insurance' },
    ],
  };
}

const render = (data: Data): Promise<string> => {
  const header = (rpt: ReportRenderer, data: Data) => {
    rpt.font('Times-Roman');
    rpt.fontSize(37);
    rpt.fontBold();
    rpt.print(data.doctor_name);
  };

  const detail = (rpt: ReportRenderer, data: Data) => {
    rpt.fontSize(14);
    rpt.fontNormal();
    data.attendances.forEach(({ date, guide_number, patient_name, health_insurance_name }, index) => {
      rpt.band([
        { data: date, width: 80, align: 'right' },
        { data: guide_number, width: 80, align: 'center' },
        { data: `${index + 1} - ${patient_name}`, width: 200, align: 'left' },
        { data: health_insurance_name, width: 100, align: 'left' }
      ], { font: "Times-Roman", addY: 5 });
    });
  };

  return new Promise<string>((resolve, reject) => {
    const fileHash = crypto.randomBytes(10).toString('hex');
    const filePath = path.resolve(__dirname, '..', '..', '..', 'tmp', `TESTE_${fileHash}.pdf`);

    const report = new Report(filePath);
    report
      .margins({ top: 100, right: 20, bottom: 10, left: 20 })
      .header(header)
      .detail(detail)
      .data(data)
      ;
    report.render((err: Error, fileName: string) => {
      if (err) return reject(err);
      return resolve(fileName);
    });
  });
}

export default {
  generateData,
  render,
};
