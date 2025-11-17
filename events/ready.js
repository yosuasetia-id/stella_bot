module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`✅ ${client.user.tag} sudah online dan siap digunakan!`);
    }
};