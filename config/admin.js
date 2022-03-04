module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd160499d7a17facee286d47ac0c64f3b'),
  },
});
