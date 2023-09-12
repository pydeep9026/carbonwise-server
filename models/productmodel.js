const mongoose = require('mongoose'); 


var productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        sold: {
            type: Number,
            default: 0,
        },
        images:String,
        color: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Color',
        }],
        tags: String,
        rating: [
            {
                star: Number,
                comment: String,
                postedBy: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
            },
        ],
        totalrating: {
            type: String,
            default: 0,
        }
    },
    { timestamps: true },
);


module.exports = mongoose.model('Product', productSchema);