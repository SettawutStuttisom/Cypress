1. ทดสอบการเข้าสู่ระบบวาเข้าสู่ระบบถูกต้องได้หรือไม่พร้อม Cap หน้าจอ
  1.1 มีการเข้าสู่ระบบสำเร็จและไม่สำเร็จ
    login สำเร็จ
    <img width="1000" height="660" alt="login-success-fullpage" src="https://github.com/user-attachments/assets/d2bc169a-7559-4499-a6ac-11e535b182df" />
    login ไม่สำเร็จ
    <img width="1000" height="660" alt="login-fail-fullpage" src="https://github.com/user-attachments/assets/47fde72d-43d4-4d8c-80c3-330a00f69529" />

  1.2 ถ้าเข้าสู่ระบบสำเร็จ Message ขึ้นว่ายังไง ไม่สำเร็จขึ้นว่ายังไง 
  สำเร็จ
  <img width="360" height="46" alt="login-success" src="https://github.com/user-attachments/assets/e1ed9a20-a5a0-4d5a-b04c-b5f5f2f91bbb" />
  ไม่สำเร็จ
  <img width="360" height="46" alt="login-fail" src="https://github.com/user-attachments/assets/722d0170-1280-4f7f-b36e-91b415755f5e" />

3. ทดสอบ Api การสมัครสมาชิกว่ามีการยิง ไปที่ url ไหนบ้าง method อะไรบ้างพร้อม Cap หน้าจอ
  2.1 ใช้คำสั่งดัก Request จากหน้าเว็บแล้ว ทำมาเป็น Json file
    <img width="1337" height="820" alt="image" src="https://github.com/user-attachments/assets/5955f50c-ba9e-4412-8c21-be3cae0c2de5" />

  2.2 เมื่อได้ Json ไฟล์มาแล้วนำมายิง Api 10 รอบ ดูว่าจะเกิดอะไรขึ้นบ้าง
    <img width="1918" height="1027" alt="image" src="https://github.com/user-attachments/assets/c3900508-b128-48ca-b08c-c90e0c76ce55" />

  2.3 เปลี่ยน Json file ให้ มี ข้อมูล 10 Email ในการทดสอบ 
  result:
  [
  {
    "index": 0,
    "round": 1,
    "url": "https://robot-lab.onrender.com/api/auth/login",
    "status": 401,
    "responseBody": {
      "message": "Invalid email or password"
    }
  },
  {
    "index": 1,
    "round": 1,
    "url": "https://robot-lab.onrender.com/api/auth/login",
    "status": 401,
    "responseBody": {
      "message": "Invalid email or password"
    }
  },
  {
    "index": 2,
    "round": 1,
    "url": "https://robot-lab.onrender.com/api/auth/login",
    "status": 401,
    "responseBody": {
      "message": "Invalid email or password"
    }
  },
  {
    "index": 3,
    "round": 1,
    "url": "https://robot-lab.onrender.com/api/auth/login",
    "status": 401,
    "responseBody": {
      "message": "Invalid email or password"
    }
  },
  {
    "index": 4,
    "round": 1,
    "url": "https://robot-lab.onrender.com/api/auth/login",
    "status": 401,
    "responseBody": {
      "message": "Invalid email or password"
    }
  },
  {
    "index": 5,
    "round": 1,
    "url": "https://robot-lab.onrender.com/api/auth/login",
    "status": 401,
    "responseBody": {
      "message": "Invalid email or password"
    }
  },
  {
    "index": 6,
    "round": 1,
    "url": "https://robot-lab.onrender.com/api/auth/login",
    "status": 401,
    "responseBody": {
      "message": "Invalid email or password"
    }
  },
  {
    "index": 7,
    "round": 1,
    "url": "https://robot-lab.onrender.com/api/auth/login",
    "status": 401,
    "responseBody": {
      "message": "Invalid email or password"
    }
  },
  {
    "index": 8,
    "round": 1,
    "url": "https://robot-lab.onrender.com/api/auth/login",
    "status": 401,
    "responseBody": {
      "message": "Invalid email or password"
    }
  },
  {
    "index": 9,
    "round": 1,
    "url": "https://robot-lab.onrender.com/api/auth/login",
    "status": 401,
    "responseBody": {
      "message": "Invalid email or password"
    }
  }
]
(**ถ้าเข้าใช้งาน web ใหม่ต้องรอ 30 วิ api ถึงจะทำงานปกติ**)
