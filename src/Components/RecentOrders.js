// RecentOrders.js
import React from 'react';
import './RecentOrders.css';

const RecentOrders = () => {
    // Sample data including images
    const orders = [
        {
            customer: 'Wade Warren',
            orderNo: '15478256',
            amount: '$124.00',
            status: 'Delivered',
            image: '/profile.png' // Replace with actual image path
        },
        {
            customer: 'Jane Cooper',
            orderNo: '48967586',
            amount: '$305.02',
            status: 'Pending',
            image: 'profile.png' // Replace with actual image path
        },
        {
            customer: 'Jane Cooper',
            orderNo: '48967586',
            amount: '$305.02',
            status: 'Pending',
            image: 'profile.png' // Replace with actual image path
        },
        {
            customer: 'Jane Cooper',
            orderNo: '48967586',
            amount: '$305.02',
            status: 'Pending',
            image: 'profile.png' // Replace with actual image path
        },
        {
            customer: 'Jane Cooper',
            orderNo: '48967586',
            amount: '$305.02',
            status: 'delivered',
            image: 'profile.png' // Replace with actual image path
        },
        {
            customer: 'Jane Cooper',
            orderNo: '48967586',
            amount: '$305.02',
            status: 'Pending',
            image: 'profile.png' // Replace with actual image path
        }
    ];

    return (
        <div className="recent-orders">
            <h2>Recent Orders</h2>
            <div className="recent-orders-content">
                <table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Order No.</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="customer-info">
                                        <img src={order.image} alt={order.customer} className="profile-image" />
                                        {order.customer}
                                    </div>
                                </td>
                                <td>{order.orderNo}</td>
                                <td>{order.amount}</td>
                                <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default RecentOrders;
