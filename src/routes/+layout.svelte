<script>
    import "./app.css"
</script>


<header>
    <a href="/portofoliu">Brad Andreea - Alexandra</a>

    <div class="header-links">
        <a href="/">Pagina principala</a>
        <a href="/clasa-v">Clasa a V-a</a>
        <a href="/clasa-vi">Clasa a VI-a</a>
        <a href="/clasa-vii">Clasa a VII-a</a>
        <a href="/clasa-viii">Clasa a VIII-a</a>
    </div>
</header>

<slot></slot>

<footer>
    <img class="flower1" src="/images/flowers/flower1.png" alt="flower1">
    <img class="flower2" src="/images/flowers/flower2.png" alt="flower2">
    <img class="flower3" src="/images/flowers/flower3.png" alt="flower3">
    <img class="flower4" src="/images/flowers/flower4.png" alt="flower4">
    <img class="flower5" src="/images/flowers/flower5.png" alt="flower5">
</footer>

<style>
    header {
        background-color: var(--primary-color);  
        display: flex;  
        justify-content: space-between;
        padding: 10px 20px; 
    }

    .header-links {
        display: flex;
        flex-wrap: wrap;
    }

    .header-links > a {
        margin-inline: 5px;
        transition: 0.2s;
    }

    .header-links > a:hover {
        color: var(--writing-color-white);
        transition: 0.2s;
    }

    footer {
        margin-top: auto;
        position: relative;
    }

    footer > img {
        height: 100px;
        width: auto;
        position: absolute;
    }

    .flower1 {
        bottom: 0px;
        left: 0px;
    }

    .flower4 {
        transform: translateX(500px) rotate(-60deg);
    }
</style>