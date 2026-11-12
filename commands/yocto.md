dependencies:
sudo apt install -y \
bc build-essential chrpath cpio diffstat \
gawk git texinfo wget gdisk python3 python3-pip

poky and other layers:
git clone git://git.yoctoproject.org/poky.git
cd poky
git switch scarthgap

git clone git://github.com/openembedded/meta-openembedded.git
cd meta-openembedded
git switch scarthgap

git clone https://github.com/agherzan/meta-raspberrypi
cd meta- raspberrypi
git switch scarthgap

initializing build env:
source poky/oe-init-build-env build-mp1
bitbake-layers show-layers

and add the layers to bblayers.conf
and in local.conf
MACHINE = "raspberrypi4-64"
CONF_VERSION = "2"
DISTRO_FEATURES:append = " systemd usrmerge"
VIRTUAL-RUNTIME_init_manager = "systemd"
VIRTUAL-RUNTIME_initscripts = "systemd-compat-units"
IMAGE_FEATURES:append = " ssh-server-openssh"
# Enable package management and development tools
EXTRA_IMAGE_FEATURES:append = " debug-tweaks package-management
tools-sdk"
LICENSE_FLAGS_ACCEPTED:append = " synaptics-killswitch commercial"
# Package manager backend
PACKAGE_CLASSES = "package_deb"

building the image:
bitbake core-image-minimal

cp -L ~/lineo/build-mp1/tmp/deploy/images/raspberrypi4-64/custom-image-raspberrypi4-64.rootfs.wic.bz2 ~/Downloads/  
bzip2 -d custom-image-raspberrypi4-64.rootfs.wic.bz2

flashing :
sudo umount /dev/sda1 /dev/sda2  
sudo dd if=custom-image-raspberrypi4-64.rootfs.wic of=/dev/sda bs=4M status=progress conv=fsync  
sync
