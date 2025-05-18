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