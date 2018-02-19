/**
 *  Session 有值的时候强制保存一次，以达到延长 Session 有效期的目的
 * @return {[type]} [description]
 */
module.exports = () => {
  return async function saveSession(ctx, next) {
    await next();
    // 如果 Session 是空的，则不保存
    if (!ctx.session.populated) {
      return
    }
    ctx.session.save();
  };
}
