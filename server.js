const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const students = [
    {"id": "3430627419", "name": "آبخیز عامر", "father": "علی", "className": "ششم الف"},
    {"id": "3430612330", "name": "احمدی عبدالله", "father": "حسین", "className": "ششم الف"},
    {"id": "3430573777", "name": "باوردانی بنیامین", "father": "عبداله", "className": "ششم الف"},
    {"id": "3430625858", "name": "باوردانی علی", "father": "احمد", "className": "ششم الف"},
    {"id": "3480424880", "name": "بشری محمد", "father": "ناصر", "className": "ششم الف"},
    {"id": "5250740812", "name": "بلوچی سدیس", "father": "داود", "className": "ششم الف"},
    {"id": "5970414451", "name": "بیجارزهی سجاد", "father": "محمد", "className": "ششم الف"},
    {"id": "3430613566", "name": "تفت عبدالرحمان", "father": "محمد", "className": "ششم الف"},
    {"id": "3430607787", "name": "چوبین یوسف", "father": "ابراهیم", "className": "ششم الف"},
    {"id": "3430636264", "name": "چوبین یوسف", "father": "علی", "className": "ششم الف"},
    {"id": "3430601649", "name": "خماسی سینا", "father": "محمد", "className": "ششم الف"},
    {"id": "6680464218", "name": "دادی محمدسجاد", "father": "محمدجاسم", "className": "ششم الف"},
    {"id": "3691541488", "name": "درزاده اسامه", "father": "عیسی", "className": "ششم الف"},
    {"id": "3430626900", "name": "دهقان امیرعلی", "father": "علی", "className": "ششم الف"},
    {"id": "3430602580", "name": "راشدی امیرحسین", "father": "عادل", "className": "ششم الف"},
    {"id": "3480420702", "name": "رحیمی عمر", "father": "حسین", "className": "ششم الف"},
    {"id": "3430634121", "name": "رستمی پور احمد", "father": "ابراهیم", "className": "ششم الف"},
    {"id": "3430629241", "name": "روحانی نژاد محمد", "father": "احمد", "className": "ششم الف"},
    {"id": "3430629403", "name": "زارع انس", "father": "فرید", "className": "ششم الف"},
    {"id": "3430621763", "name": "سالمی حسام", "father": "صالح", "className": "ششم الف"},
    {"id": "3560444551", "name": "عرب خلیل", "father": "علی", "className": "ششم الف"},
    {"id": "5150377244", "name": "کریم پور محمدرضا", "father": "محمد", "className": "ششم الف"},
    {"id": "3430635136", "name": "محمودی مرد علی", "father": "حسین", "className": "ششم الف"},
    {"id": "3430612578", "name": "مؤمنی محمد", "father": "ناصر", "className": "ششم الف"},
    {"id": "6490140330", "name": "برازنده امیرمحمد", "father": "بهروز", "className": "ششم ب"},
    {"id": "3430632544", "name": "تن زده ثامر", "father": "خالد", "className": "ششم ب"},
    {"id": "3430614732", "name": "تن زده طاها", "father": "ابراهیم", "className": "ششم ب"},
    {"id": "3430634873", "name": "جاسمی امین", "father": "فرید", "className": "ششم ب"},
    {"id": "3430629500", "name": "جان فزا امین", "father": "یوسف", "className": "ششم ب"},
    {"id": "3430601886", "name": "جان فزا بنیامین", "father": "حسین", "className": "ششم ب"},
    {"id": "3691544908", "name": "جمالزهی مقدم سبحان", "father": "بشیر", "className": "ششم ب"},
    {"id": "7040199475", "name": "جمالی هادی", "father": "حبیب", "className": "ششم ب"},
    {"id": "3430609445", "name": "داشن محمد", "father": "ابراهیم", "className": "ششم ب"},
    {"id": "6680444276", "name": "دامنی سبحان", "father": "محمدصدیق", "className": "ششم ب"},
    {"id": "3430593001", "name": "دهبان علی", "father": "محمد", "className": "ششم ب"},
    {"id": "3430585082", "name": "دهقانی ماهان", "father": "موسی", "className": "ششم ب"},
    {"id": "3430602262", "name": "رامشک محمدمهدی", "father": "حسن", "className": "ششم ب"},
    {"id": "3430606373", "name": "رحیمی ابراهیم", "father": "علی", "className": "ششم ب"},
    {"id": "3430633591", "name": "رواز محمد", "father": "مختار", "className": "ششم ب"},
    {"id": "3430542601", "name": "زارع عبدالرحمان", "father": "محمد", "className": "ششم ب"},
    {"id": "3430611865", "name": "زارعی علی", "father": "مسلم", "className": "ششم ب"},
    {"id": "3430614147", "name": "عبدالهی احمد", "father": "ابراهیم", "className": "ششم ب"},
    {"id": "3581956845", "name": "محمودزهی تاجی امیرپاشا", "father": "فرهاد", "className": "ششم ب"},
    {"id": "3430610257", "name": "منصوری احمد", "father": "حسن", "className": "ششم ب"},
    {"id": "3430617391", "name": "نجاتی امیرعبدالله", "father": "ابراهیم", "className": "ششم ب"},
    {"id": "3430610923", "name": "نجاتی رضا", "father": "علی", "className": "ششم ب"},
    {"id": "21170012779", "name": "نعمتی ابراهیم", "father": "نجیب الله", "className": "ششم ب"},
    {"id": "3480398324", "name": "یوسفی فرامرز", "father": "محمد", "className": "ششم ب"}
];

app.get('/api/students/:className', (req, res) => {
    const className = decodeURIComponent(req.params.className);
    res.json(students.filter(s => s.className === className));
});

app.get('/', (req, res) => {
    res.send('سرور آزمون‌یار احمدی فعال است');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
