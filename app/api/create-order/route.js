import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,

  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const body = await req.json();

    const amount = body.amount;

    if (!amount) {
      return NextResponse.json(
        { error: 'Amount missing' },

        { status: 400 }
      );
    }

    const order = await razorpay.orders.create({
      amount: amount * 100,

      currency: 'INR',

      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json({
      order_id: order.id,

      amount: order.amount,

      currency: order.currency,
    });
  } catch (err) {
    console.log('RAZORPAY_ID:', process.env.RAZORPAY_KEY_ID);
    console.log('RAZORPAY_SECRET:', process.env.RAZORPAY_KEY_SECRET);

    console.log(err);

    return NextResponse.json(
      {
        error: err.message,
      },

      {
        status: 500,
      }
    );
  }
}
