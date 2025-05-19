const API_URL = './api';

export async function addUser(userData) {
  try {
    if (!/^[\d]{10,15}$/.test(userData.phone)) {
      throw new Error('شماره تلفن معتبر نیست');
    }

    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify(userData),
    });

    if (!res.ok) {
      throw new Error('خطایی رخ داده');
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
};


export async function loginUser(info) {
  try {
    if (!info.emailOrPhone || !info.password) {
      throw new Error('لطفاً ایمیل/شماره تلفن و رمز عبور را وارد کنید');
    }

    const getUsers = await fetch(`${API_URL}/users`);
    if (!getUsers.ok) {
      throw new Error('خطا در دریافت اطلاعات کاربران');
    }

    const users = await getUsers.json();

    const user = users.find(u => 
      (u.email === info.emailOrPhone || u.phone === info.emailOrPhone) && 
      u.password === info.password
    );

    if (!user) {
      throw new Error('ایمیل/شماره تلفن یا رمز عبور اشتباه است');
    }

    return user;
  } catch (error) {
    throw error;
  }
}