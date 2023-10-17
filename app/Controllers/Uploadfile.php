<?php

namespace App\Controllers;

use CodeIgniter\Files\File;

class Uploadfile extends BaseController
{
    protected $helpers = ['form'];

    public function indexold($folder, $file) {
        $filePath = WRITEPATH . 'uploads' . DIRECTORY_SEPARATOR . $folder . DIRECTORY_SEPARATOR . $file;
        if (file_exists($filePath)) {
            $mime = mime_content_type($filePath);
            header('Content-Length: ' . filesize($filePath));
            header("Content-Type: $mime");
            header('Content-Disposition: inline; filename="' . $file . '";');
            readfile($filePath);
            exit();
        } else {
            $this->response->setStatusCode(404);
            echo "<h1 style='text-align: center;'>File Not Found</h1>";
        }
    }

    public function index($folder, $file) {
        $filePath = WRITEPATH . 'uploads' . DIRECTORY_SEPARATOR . $folder . DIRECTORY_SEPARATOR . $file;
        if(($image = file_get_contents($filePath)) === FALSE)
        {
            show_404();
        }
        else
        {
            // choose the right mime type
            $mimeType = 'image/jpg';

            $this->response
            ->setStatusCode(200)
            ->setContentType($mimeType)
            ->setBody($image)
            ->send();
        }                       
    }
    
    public function dropzoneupload()
    {
        $uploadDir = site_url() . 'template-assets/img/team/';

        if (!empty($_FILES)) {
            $tmpFile = $_FILES['file']['tmp_name'];
            $filename = $uploadDir . '/' . time() . '-' . $_FILES['file']['name'];
            move_uploaded_file($tmpFile, $filename);
        }
    }

    public function uploadCompanySetupPics()
    {
        $json = [];

        $validationRule = [
            'music' => [
                'label' => 'Image File',
                'rules' => 'uploaded[music]'
                    . '|is_image[music]'
                    . '|mime_in[music,image/jpg,image/jpeg,image/gif,image/png,image/webp]'
                    . '|max_size[music,100]'
                    . '|max_dims[music,1024,768]',
            ],
        ];

        if (! $this->validate($validationRule)) {
            $json = ['errors' => $this->validator->getErrors()];
        }
        
        $img = $this->request->getFile('music');

        if (!$img->hasMoved()) {
            $storePath = $img->store();
            $fileURL = site_url() . 'uploads/' . $storePath;
            return $this->response->setJSON([
                'filePath' => $storePath,
                'fileUrl' => $fileURL
            ]);
        }
        
        echo "Upload a file";
    }

    public function upload1() {
        try {

            $file = $this->request->getVarFile('music');

            //echo $file;

            //exit();

            $newName = $file->getRandomName();

            //echo base_url();

            //$newName = $file->getName();

            if ($file->move(ROOTPATH . 'template-assets/img/team', $newName)) {
                echo $newName;
            }
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
    }
}
