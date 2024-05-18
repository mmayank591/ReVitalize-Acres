import Listing from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body); // This line uses the Listing model's create method to create a new listing in the database.
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};
