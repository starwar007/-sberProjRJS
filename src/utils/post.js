//some вернет в isLiked true(если у этого поста есть лайк юсера залогиненного) или false
export const isLiked = (likes, userId) => likes.some(id => id === userId);
