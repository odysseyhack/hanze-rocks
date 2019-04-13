<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;

abstract class Repository
{

    /**
     * @var Model $model
     */
    protected $model;

    /**
     * @return Model
     */
    abstract protected function getModel();

    public function create(array $data): Model
    {
        foreach($data as $key => $value) {
            if(!is_string($value)) {
                continue;
            }
            $data[$key] = mb_convert_encoding($value, 'UTF-8');
        }

        $newModel = $this->getModel()->create($data);

        return $newModel;
    }

    public function all() : Collection
    {
        return $this->getModel()->all();
    }

    public function find(int $id): ?Model
    {
        try {
            return $this->getModel()->findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return null;
        }
    }

    public function update(int $id, array $data): ?Model
    {
        if ($model = $this->find($id)) {
            $model->update($data);

            return $model;
        };

        return null;
    }

    public function delete(int $id): bool
    {
        if ($model = $this->find($id)) {
            return $model->delete();
        }

        return false;
    }
}
