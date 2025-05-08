const axios = require('axios');

// Your dummy student data
const students = [
    { firstname: 'Aarav', lastname: 'Sharma', username: 'aarav.sharma', password: 'password123', email: 'aarav@example.com', enrollmentNo: 'EN12345', mobile: '9876543210', course: 'Computer Science', semester: '1' },
    { firstname: 'Vivaan', lastname: 'Verma', username: 'vivaan.verma', password: 'password123', email: 'vivaan@example.com', enrollmentNo: 'EN12346', mobile: '9876543211', course: 'Mathematics', semester: '2' },
    { firstname: 'Ishaan', lastname: 'Patel', username: 'ishaan.patel', password: 'password123', email: 'ishaan@example.com', enrollmentNo: 'EN12347', mobile: '9876543212', course: 'Physics', semester: '1' },
    { firstname: 'Reyansh', lastname: 'Gupta', username: 'reyansh.gupta', password: 'password123', email: 'reyansh@example.com', enrollmentNo: 'EN12348', mobile: '9876543213', course: 'Chemistry', semester: '3' },
    { firstname: 'Aadhya', lastname: 'Mehta', username: 'aadhya.mehta', password: 'password123', email: 'aadhya@example.com', enrollmentNo: 'EN12349', mobile: '9876543214', course: 'Computer Science', semester: '2' },
    { firstname: 'Mahi', lastname: 'Singh', username: 'mahi.singh', password: 'password123', email: 'mahi@example.com', enrollmentNo: 'EN12350', mobile: '9876543215', course: 'Biology', semester: '1' },
    { firstname: 'Krishna', lastname: 'Raj', username: 'krishna.raj', password: 'password123', email: 'krishna@example.com', enrollmentNo: 'EN12351', mobile: '9876543216', course: 'Mathematics', semester: '3' },
    { firstname: 'Neha', lastname: 'Gupta', username: 'neha.gupta', password: 'password123', email: 'neha@example.com', enrollmentNo: 'EN12352', mobile: '9876543217', course: 'Physics', semester: '2' },
    { firstname: 'Ananya', lastname: 'Sharma', username: 'ananya.sharma', password: 'password123', email: 'ananya@example.com', enrollmentNo: 'EN12353', mobile: '9876543218', course: 'Computer Science', semester: '3' },
    { firstname: 'Saanvi', lastname: 'Verma', username: 'saanvi.verma', password: 'password123', email: 'saanvi@example.com', enrollmentNo: 'EN12354', mobile: '9876543219', course: 'English', semester: '2' },
    { firstname: 'Aarav', lastname: 'Sharma', username: 'aarav.sharma2', password: 'password123', email: 'aarav2@example.com', enrollmentNo: 'EN12355', mobile: '9876543220', course: 'History', semester: '1' },
    { firstname: 'Vivaan', lastname: 'Verma', username: 'vivaan.verma2', password: 'password123', email: 'vivaan2@example.com', enrollmentNo: 'EN12356', mobile: '9876543221', course: 'Computer Science', semester: '2' },
    { firstname: 'Ishaan', lastname: 'Patel', username: 'ishaan.patel2', password: 'password123', email: 'ishaan2@example.com', enrollmentNo: 'EN12357', mobile: '9876543222', course: 'Electrical Engineering', semester: '3' },
    { firstname: 'Reyansh', lastname: 'Gupta', username: 'reyansh.gupta2', password: 'password123', email: 'reyansh2@example.com', enrollmentNo: 'EN12358', mobile: '9876543223', course: 'Mathematics', semester: '1' },
    { firstname: 'Aadhya', lastname: 'Mehta', username: 'aadhya.mehta2', password: 'password123', email: 'aadhya2@example.com', enrollmentNo: 'EN12359', mobile: '9876543224', course: 'Biotechnology', semester: '2' },
    { firstname: 'Mahi', lastname: 'Singh', username: 'mahi.singh2', password: 'password123', email: 'mahi2@example.com', enrollmentNo: 'EN12360', mobile: '9876543225', course: 'Physics', semester: '3' },
    { firstname: 'Krishna', lastname: 'Raj', username: 'krishna.raj2', password: 'password123', email: 'krishna2@example.com', enrollmentNo: 'EN12361', mobile: '9876543226', course: 'Mathematics', semester: '1' },
    { firstname: 'Neha', lastname: 'Gupta', username: 'neha.gupta2', password: 'password123', email: 'neha2@example.com', enrollmentNo: 'EN12362', mobile: '9876543227', course: 'Literature', semester: '2' },
    { firstname: 'Ananya', lastname: 'Sharma', username: 'ananya.sharma2', password: 'password123', email: 'ananya2@example.com', enrollmentNo: 'EN12363', mobile: '9876543228', course: 'Engineering', semester: '3' },
    { firstname: 'Nashit', lastname: 'Khan', username: 'nashit.khan', password: 'password123', email: 'nashit@example.com', enrollmentNo: 'EN12364', mobile: '9876543229', course: 'Mechanical Engineering', semester: '1' },
    { firstname: 'Lina', lastname: 'Singh', username: 'lina.singh', password: 'password123', email: 'lina@example.com', enrollmentNo: 'EN12365', mobile: '9876543230', course: 'Civil Engineering', semester: '2' },
    { firstname: 'Alok', lastname: 'Pandey', username: 'alok.pandey', password: 'password123', email: 'alok@example.com', enrollmentNo: 'EN12366', mobile: '9876543231', course: 'Computer Science', semester: '3' },
    { firstname: 'Shubham', lastname: 'Yadav', username: 'shubham.yadav', password: 'password123', email: 'shubham@example.com', enrollmentNo: 'EN12367', mobile: '9876543232', course: 'Data Science', semester: '2' },
    { firstname: 'Nina', lastname: 'Patel', username: 'nina.patel', password: 'password123', email: 'nina@example.com', enrollmentNo: 'EN12368', mobile: '9876543233', course: 'Marketing', semester: '1' },
    { firstname: 'Siddharth', lastname: 'Gupta', username: 'siddharth.gupta', password: 'password123', email: 'siddharth@example.com', enrollmentNo: 'EN12369', mobile: '9876543234', course: 'Finance', semester: '3' },
    { firstname: 'Karishma', lastname: 'Singh', username: 'karishma.singh', password: 'password123', email: 'karishma@example.com', enrollmentNo: 'EN12370', mobile: '9876543235', course: 'Physics', semester: '2' },
    { firstname: 'Deepak', lastname: 'Jain', username: 'deepak.jain', password: 'password123', email: 'deepak@example.com', enrollmentNo: 'EN12371', mobile: '9876543236', course: 'Electrical Engineering', semester: '1' },
    { firstname: 'Swati', lastname: 'Patel', username: 'swati.patel', password: 'password123', email: 'swati@example.com', enrollmentNo: 'EN12372', mobile: '9876543237', course: 'Architecture', semester: '3' },
    { firstname: 'Riya', lastname: 'Verma', username: 'riya.verma', password: 'password123', email: 'riya@example.com', enrollmentNo: 'EN12373', mobile: '9876543238', course: 'Fine Arts', semester: '1' },
    { firstname: 'Ravi', lastname: 'Reddy', username: 'ravi.reddy', password: 'password123', email: 'ravi@example.com', enrollmentNo: 'EN12374', mobile: '9876543239', course: 'Law', semester: '2' },
    { firstname: 'Chirag', lastname: 'Bansal', username: 'chirag.bansal', password: 'password123', email: 'chirag@example.com', enrollmentNo: 'EN12375', mobile: '9876543240', course: 'Psychology', semester: '3' },
    { firstname: 'Nikita', lastname: 'Arora', username: 'nikita.arora', password: 'password123', email: 'nikita@example.com', enrollmentNo: 'EN12376', mobile: '9876543241', course: 'Design', semester: '1' },
    { firstname: 'Vishal', lastname: 'Tiwari', username: 'vishal.tiwari', password: 'password123', email: 'vishal@example.com', enrollmentNo: 'EN12377', mobile: '9876543242', course: 'Mechanical Engineering', semester: '2' },
    { firstname: 'Tanu', lastname: 'Rathi', username: 'tanu.rathi', password: 'password123', email: 'tanu@example.com', enrollmentNo: 'EN12378', mobile: '9876543243', course: 'Mathematics', semester: '3' },
    { firstname: 'Ankit', lastname: 'Bhardwaj', username: 'ankit.bhardwaj', password: 'password123', email: 'ankit@example.com', enrollmentNo: 'EN12379', mobile: '9876543244', course: 'Environmental Science', semester: '1' },
    { firstname: 'Saanvi', lastname: 'Gupta', username: 'saanvi.gupta', password: 'password123', email: 'saanvi@example.com', enrollmentNo: 'EN12380', mobile: '9876543245', course: 'Business Administration', semester: '2' },
    { firstname: 'Kavya', lastname: 'Sharma', username: 'kavya.sharma', password: 'password123', email: 'kavya@example.com', enrollmentNo: 'EN12381', mobile: '9876543246', course: 'Health Sciences', semester: '3' },
    { firstname: 'Raj', lastname: 'Sethi', username: 'raj.sethi', password: 'password123', email: 'raj@example.com', enrollmentNo: 'EN12382', mobile: '9876543247', course: 'Law', semester: '1' },
    { firstname: 'Aarav', lastname: 'Malhotra', username: 'aarav.malhotra', password: 'password123', email: 'aarav3@example.com', enrollmentNo: 'EN12383', mobile: '9876543248', course: 'Physics', semester: '2' },
    { firstname: 'Disha', lastname: 'Patel', username: 'disha.patel', password: 'password123', email: 'disha@example.com', enrollmentNo: 'EN12384', mobile: '9876543249', course: 'Biochemistry', semester: '3' }
];


async function seedStudents() {
    for (const student of students) {
        try {
            const res = await axios.post('http://localhost:5000/api/users', student, {
                headers: {
                    Authorization: 'Bearer YOUR_ADMIN_TOKEN_HERE' // Include if your route needs auth
                }
            });
            console.log(`✅ Inserted: ${student.firstname} ${student.lastname}`);
        } catch (err) {
            console.error(`❌ Error inserting ${student.firstname}:`, err.response?.data || err.message);
        }
    }
}

seedStudents();