import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,

      razorpay_payment_id,

      razorpay_signature,
    } = body;

    const generatedSignature = crypto

      .createHmac(
        'sha256',

        process.env.RAZORPAY_KEY_SECRET
      )

      .update(`${razorpay_order_id}|${razorpay_payment_id}`)

      .digest('hex');

    const isAuthentic = generatedSignature === razorpay_signature;

    if (isAuthentic) {
      return NextResponse.json({
        success: true,
      });
    }

    return NextResponse.json(
      {
        success: false,
      },

      {
        status: 400,
      }
    );
  } catch (err) {
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
