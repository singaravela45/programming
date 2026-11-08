cp -L ~/lineo/build-mp1/tmp/deploy/images/raspberrypi4-64/custom-image-raspberrypi4-64.rootfs.wic.bz2 ~/Downloads/  
bzip2 -d custom-image-raspberrypi4-64.rootfs.wic.bz2

flashing :
sudo umount /dev/sda1 /dev/sda2  
sudo dd if=custom-image-raspberrypi4-64.rootfs.wic of=/dev/sda bs=4M status=progress conv=fsync  
sync
