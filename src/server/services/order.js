const API_URL = './api';

export async function subFrameOrder(orderData) {
  try {
    const res = await fetch(`${API_URL}/subframeOrders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify(orderData),
    });

    if (!res.ok) {
      throw new Error('خطایی رخ داده');
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
};

export async function subPuzzleOrder(orderData) {
  try {
    const res = await fetch(`${API_URL}/subPuzzleOrders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify(orderData),
    });

    if (!res.ok) {
      throw new Error('خطایی رخ داده');
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
};

export async function subGlassOrder(orderData) {
  try {
    const res = await fetch(`${API_URL}/subGlassOrders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify(orderData),
    });

    if (!res.ok) {
      throw new Error('خطایی رخ داده');
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
};