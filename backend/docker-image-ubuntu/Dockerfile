FROM ubuntu

RUN apt-get update 
RUN apt-get --no-install-recommends -y install wget libpq-dev postgresql-server-dev-10 build-essential
RUN wget --no-check-certificate https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh
RUN bash ~/miniconda.sh -b -p $HOME/miniconda
RUN chmod -R 777 $HOME/miniconda
RUN . "$HOME/miniconda/etc/profile.d/conda.sh"
RUN export PATH=/root/miniconda/bin:$PATH