<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    protected $fillable = [
        'order_number',
        'guest_name',
        'guest_email',
        'guest_phone',
        'shipping_address',
        'subtotal',
        'total',
        'currency',
        'hitpay_payment_id',
        'hitpay_payment_request_id',
        'paid_at',
    ];

    protected $casts = [
        'subtotal' => 'decimal:2',
        'total' => 'decimal:2',
        'paid_at' => 'datetime',
    ];

    public function orderItems() : HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public static function generateOrderNumber(): string
    {
       return 'ORD-' . strtoupper(uniqid());
    }

    // public function items()
    // {
    //     return $this->hasMany(OrderItem::class);
    // }
}
