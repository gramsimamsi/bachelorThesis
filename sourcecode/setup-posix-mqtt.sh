#!/bin/bash
echo "----------------------------------------------------------------------------"
echo " Automatically set up development environment for POSIX-platform"
echo "----------------------------------------------------------------------------"
echo ""
echo " Includes 64bit-datatypes, float-datatypes, Ethernet-Interface,"
echo " ASN1-encoding, ..."
echo ""
echo " To include tests set directories for boost-test-framework and "
echo " set FORTE_TESTS-option to 'ON'"
echo ""
echo "----------------------------------------------------------------------------"

export forte_bin_dir="bin/posix"

#set to boost-include directory
export forte_boost_test_inc_dirs=""
#set to boost-library directory
export forte_boost_test_lib_dirs=""

if [ ! -d "$forte_bin_dir" ]; then
  mkdir -p "$forte_bin_dir"
fi

if [ -d "$forte_bin_dir" ]; then
  
  echo "For building forte go to $forte_bin_dir and execute \"make\""
  echo "forte can be found at ${forte_bin_dir}/src"
  echo "forte_tests can be found at ${forte_bin_dir}/tests"
  
  cd "./$forte_bin_dir"
  
  cmake -G "Unix Makefiles" \
      -DFORTE_ARCHITECTURE=Posix \
      -DFORTE_COM_ETH=ON \
      -DFORTE_COM_FBDK=ON \
      -DFORTE_COM_LOCAL=ON \
      -DFORTE_TESTS=OFF \
      -DFORTE_TESTS_INC_DIRS=${forte_boost_test_inc_dirs} \
      -DFORTE_TESTS_LINK_DIRS=${forte_boost_test_inc_dirs} \
      -DFORTE_MODULE_CONVERT=ON \
      -DFORTE_MODULE_IEC61131=ON \
      -DFORTE_MODULE_UTILS=ON ../../ \
      -DFORTE_MODULE_SysFs=ON \
      -DFORTE_COM_PAHOMQTT_INCLUDE_DIR=/home/pi/paho.mqtt.c/src \
      -DFORTE_COM_PAHOMQTT=ON \
      -DFORTE_COM_PAHOMQTT_LIB=/home/pi/ ... /libpaho-mqtt3a.so \
      -DFORTE_COM_PAHOMQTT_LIB_DIR=/home/pi/paho.mqtt.c/build/output

else
  echo "unable to create ${forte_bin_dir}"
  exit 1
fi

