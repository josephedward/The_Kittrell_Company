
<div class="container project-view">
    
	<div class="row">
        <div class="col-md-12 project-images"><?php
if(isset($_GET['item'])):
	$item = $_GET['item'];
?>
            <img src="images/gallery/<?php echo $item; ?>.jpg" alt="" class="img-responsive" />
<?php endif; ?>
        </div>
    </div>
</div>
