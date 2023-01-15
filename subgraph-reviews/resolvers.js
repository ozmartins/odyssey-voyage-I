const resolvers = {
  Query: {
    latestReviews: (_, __, { dataSources }) => {
      return dataSources.reviewsAPI.getLatestReviews();
    }
  },
  Mutation: {
    submitReview: (_, { locationReview }, { dataSources }) => {
      const newReview = dataSources.reviewsAPI.submitReviewForLocation(locationReview);
      return { code: 200, success: true, message: 'success', locationReview: newReview };
    }
  },
  Review: {
    location: ({ locationId }) => {
      return { id: locationId }
    }
  },
  Location: {
    reviewsForLocation: ({ id }, _, { dataSources }) => {
      return dataSources.reviewsAPI.getReviewsForLocation(id)
    },
    overallRating: ({ id }, _, { dataSources }) => {
      return dataSources.reviewsAPI.getOverallRatingForLocation(id)
    }
  }
};

module.exports = resolvers;
